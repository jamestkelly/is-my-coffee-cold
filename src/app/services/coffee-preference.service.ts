import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { coffeePreference } from '../shared/coffeePreference';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { HttpClient } from '@angular/common/http';
import * as CountryData from '../../assets/data/countryCodes.json';
import * as CityData from '../../assets/data/city.list.json';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoffeePreferenceService {
  collectionName = 'userPreferences';
  userCollectionName = 'Preferences';

  constructor
  (
    private fire: AngularFirestore,
    private auth: AngularFireAuth,
    public http: HttpClient
  ) {}

  // Create a new calculation preference in the specified collection
  createPreference(preference) {
    console.log(firebase.auth().currentUser);
    let currentUser = firebase.auth().currentUser;
    return this.fire.collection(this.collectionName).doc(currentUser.uid).collection(this.userCollectionName).add(preference);
  }

  // Call `snapshotChanges()` method to read records and subscribe for updates
  readPreferences() {
    let currentUser = firebase.auth().currentUser;
    return this.fire.collection(this.collectionName).doc(currentUser.uid).collection(this.userCollectionName).snapshotChanges();
  }

  // Method utilising `doc()` to take collection name and document ID to update preference
  updatePreferences(preferenceID, preference) {
    let currentUser = firebase.auth().currentUser;
    this.fire.doc(this.collectionName + '/' + currentUser.uid + '/' + this.userCollectionName + '/' + preferenceID).update(preference);
  }

  // Method to delete a preference
  deletePreference(preferenceID) {
    let currentUser = firebase.auth().currentUser;
    this.fire.doc(this.collectionName + '/' + currentUser.uid + '/' + this.userCollectionName + '/' + preferenceID).delete();
  }

  // Method to request local data stored in application
  getLocalData(file: string) {
    if (file === 'countryCodes.json') {
      return CountryData;
    }
    else {
      return CityData;
    }
  }
  /*getLocalData(file: string) {
    this.http.get(`../../assets/data/${file}`).subscribe(data => {
      return data});
  }*/

  // Method to get country code
  getCountryCode(countryName: string) {
    // Fetch country data array
    const data = this.getLocalData('countryCodes.json');
    let countryCode = "";

    // Search the data until 'countryCode' is filled
    while (countryCode === "") {
      for (let i = 0; i < Object.keys(data).length; i++) {
        if (data[i].Name === countryName) {
          countryCode = data[i].Code;
          break; // End the search
        }
      }
    }
    console.log(countryCode); // Temporary for debugging
    return countryCode;
  }

  // Method to create an array containing city names corresponding to selected country
  getCities(countryCode: string) {
    // Fetch city data array
    const data = this.getLocalData('cities');
    let cities = "";

    // Search data until all cities corresponding to 'countryCode' have been found
    for (let j = 0; j < Object.keys(data).length; j++) {
      if (countryCode === data[j].country) {
        cities += data[j].name + ' ';
      }
    }

    // The following two lines are temporary for debugging
    let cityList = cities.split(' ');
    console.log(cityList);
    return cityList; // TODO: replace with `return cities.split(' ');`
  }

  // Method to get city ID from local data
  getCityId(cityName: string, countryCode: string) {
    const data = this.getLocalData('cities');

    // Search data until relevant city ID is found
    for (let k = 0; k < Object.keys(data).length; k++) {
      if (cityName === data[k].name && countryCode === data[k].country) {
        console.log(data[k].id); // Temporary for debugging
        return data[k].id;
      }
    }
  }

  // Method to get temperature of coffee type
  getCoffeeTemp(coffeeType: string) {
    // Define coffee types and corresponding temperatures
    const coffeeData =
    [
      {"name": 'Long Black', "temperature": '80'},
      {"name": 'Flat White', "temperature": '65'},
      {"name": 'Latte', "temperature": '60'},
      {"name": 'Cappuccino', "temperature": '70'},
      {"name": 'Mocha', "temperature": '75'},
      {"name": 'Iced Coffee', "temperature": '20'},
    ];
    const defaultTemp = 80; // Degrees Celsius

    // Switch case depending on 'coffeeType'
    switch (coffeeType) {
      case coffeeData[0].name: // Long Black
        return coffeeData[0].temperature;

      case coffeeData[1].name: // Flat White
        return coffeeData[1].temperature;

      case coffeeData[2].name: // Latte
        return coffeeData[2].temperature;

      case coffeeData[3].name: // Cappuccino
        return coffeeData[3].temperature;

      case coffeeData[4].name: // Mocha
        return coffeeData[4].temperature;

      case coffeeData[5].name: // Iced Coffee
        return coffeeData[5].temperature;
    }
  }

  // Method to approximate coffee temperature via modified Euler methodology
  modifiedEuler(cityTemp: string, coffeeTemp) {
    // Initialise known params
    var timeStart = 0; // Minutes
    var timeEnd = 40; // Minutes
    var steps = timeEnd * 60; // Calculate total steps
    var k = 0.1 // Positive constant for equation
    var undrinkable = 40; // Temperature for when a coffee's flavour palette changes
    let stepSize = (timeEnd - timeStart) / steps; // Calculate step-size
    var timeArray = new Array(steps);
    var tempArray = new Array(timeArray.length);
    var minutesTotal = 0;

    // Populate first position of both arrays with corresponding values
    timeArray[0] = timeStart;
    tempArray[0] = coffeeTemp;

    // Fill 'timeArray' with time incrementing by step size
    for (var i = 1; i < timeArray.length; i++) {
      timeArray[i] = parseFloat(timeArray[i - 1] + stepSize);
    }

    // Approximate the coffee temperature at each corresponding point in 'timeArray'
    for (var j = 0; j < tempArray.length - 1; j++) {
      var k1 = stepSize * ((k * -1) * (parseFloat(tempArray[j]) - parseFloat(cityTemp)));
      var k2 = stepSize * ((k * -1) * (parseFloat(tempArray[j]) + k1 - parseFloat(cityTemp)));
      tempArray[j + 1] = parseFloat(tempArray[j]) + 1/2 * (k1 + k2);
    }

    // Perform iterations via for loop to calculate the time taken for the coffee
    // to become "undrinkable".
    for (var k = 0; k < tempArray.length; k++) {
      let temperature = tempArray[k];
      if (temperature < undrinkable) {
          minutesTotal = timeArray[k];
          break;
      }
    }

    return minutesTotal * 60; // Return time until coffee is cold in seconds
  }

  // Method to convert seconds to minutes & seconds
  convertTime(second) {
    var minutes = Math.floor(second / 60);
    var seconds = second - minutes * 60;
    return [minutes, seconds];
  }
}
