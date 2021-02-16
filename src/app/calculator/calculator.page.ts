import { Component } from '@angular/core';
import { CoffeePreferenceService } from '../services/coffee-preference.service';
import { Resolve } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

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
  preferenceChosen: [];
  preferenceArray = [];

  constructor
  (
    private coffeeService: CoffeePreferenceService
  ) {}

  public isManual: boolean = false;

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

    this.calculateCoffee(preferenceArray);
  }

  async calculateCoffee(preferenceArray: any) {
    let countryCode = "AU"; // Temporary for Australia only use
    let cityID = this.getAusCityId(preferenceArray[1]);
    console.log(countryCode);
    console.log(cityID);
    let coffeeTemp = this.coffeeService.getCoffeeTemp(preferenceArray[0]);
    console.log(coffeeTemp);
    let celsius = await this.getWeather(cityID);
    console.log(celsius);
    let seconds = await this.coffeeService.modifiedEuler(celsius, coffeeTemp);
    console.log(seconds);
    let timeRemaining = this.coffeeService.convertTime(seconds);
    console.log(timeRemaining);
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
}
