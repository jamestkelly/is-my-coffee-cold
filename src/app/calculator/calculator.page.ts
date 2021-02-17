import { Component } from '@angular/core';
import { CoffeePreferenceService } from '../services/coffee-preference.service';
import { Router, NavigationExtras } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from '../services/data.service';

interface PreferenceData {
  preferenceName: string;
  coffeeType: string;
  cityName: string;
  countryName: string;
}

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  preferenceList = [];
  preferenceData: PreferenceData;
  preferenceForm: FormGroup;
  coffeeType: string = "";
  cityName: string = "";
  countryName: string = "";
  dataReturned: any;
  preferenceChosen: [];
  preferenceArray = [];
  outputData = [];

  constructor
  (
    private coffeeService: CoffeePreferenceService,
    private dataService: DataService,
    public alert: AlertController,
    public route: Router,
  ) {}

  public isManual: boolean = false;
  public isCalculated: boolean = false;

  ngOnInit() {
    this.coffeeService.readPreferences().subscribe(data => {
      this.preferenceList = data.map(output => {
        return {
          id: output.payload.doc.id,
          isEdit: false,
          preferenceName: output.payload.doc.data()['preferenceName'],
          coffeeType: output.payload.doc.data()['coffeeType'],
          cityName: output.payload.doc.data()['cityName'],
          countryName: output.payload.doc.data()['countryName']
        };
      })
      console.log(this.preferenceList);
    });
  }

  userSelectMethod($event) {
    this.isManual = !this.isManual;
  }

  async calculatorSwitch() {
    let preferenceArray = [];
    if (this.isManual) {
      preferenceArray = [this.coffeeType, this.cityName, this.countryName];
      console.log(this.preferenceArray);
    }
    else {
      console.log(this.preferenceChosen);

      /* Relatively clunky solution but it works, i.e. if a user has multiple preferences with
       * the same name, then this will only return the last preference object it finds
       * Possible ways to mitigate:
       *        [1]: Write a function on pages where the user creates preference objects to check if the
       *              preference name already exists, if yes, they must select a different name.
       *        [2]: Pull this unique id of the preference object and use that to identify the object to pass forward
       *        [3]: Get index position in list from *ngFor loop and store it and use in function
      */
      for (let i = 0; i < this.preferenceList.length; i++) {
        if (this.preferenceChosen === this.preferenceList[i].preferenceName) {
          preferenceArray = [this.preferenceList[i].coffeeType, this.preferenceList[i].cityName,
            this.preferenceList[i].countryName];
          console.log(preferenceArray);
        }
      }
    }

    this.outputData = await this.calculateCoffee(preferenceArray);
    let message = await this.createMessage();
    await this.showAlert("Success!", message);
  }

  async calculateCoffee(preferenceArray: any) {
    let countryCode = "AU"; // Temporary for Australia only use
    let cityID = this.getAusCityId(preferenceArray[1]);
    let coffeeTemp = this.coffeeService.getCoffeeTemp(preferenceArray[0]);
    let celsius = await this.getWeather(cityID);
    let seconds = await this.coffeeService.modifiedEuler(celsius, coffeeTemp);
    let timeRemaining = this.coffeeService.convertTime(seconds);
    return [timeRemaining[0], timeRemaining[1].toFixed(2), celsius, preferenceArray[1]];
  }

  getAusCityId(cityName: string) {
    const citiesDictionary =
    [
      ["Adelaide", 2078025],
      ["Brisbane", 2174003],
      ["Cairns", 7839567],
      ["Canberra", 2172517],
      ["Darwin", 2073124],
      ["Hobart", 7839672],
      ["Melbourne", 2158177],
      ["Perth", 2063523],
      ["Sydney", 2147714]
    ];

    for (let j = 0; j < citiesDictionary.length; j++) {
      if (cityName === citiesDictionary[j][0]) {
        return citiesDictionary[j][1];
      }
    }
  }

  async getWeather(cityID: any) {
    var key = '92b30ef73aba0e9531f56ed3e67666a8';
    const response = await fetch('https://api.openweathermap.org/data/2.5/weather?id=' + cityID +
    '&units=metric' + '&appid=' + key);
    const json = await response.json();
    let celsius = json.main.temp;
    return celsius;
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Okay"]
    })

    await alert.present();
  }

  async createMessage() {
    let message =
      `At the current temperature of ${this.outputData[2]} in ${this.outputData[3]}, it will take approximately ${this.outputData[0]} minutes
        and ${this.outputData[1]} seconds for your coffee to go 'cold'!`;
    return message;
  }
}
