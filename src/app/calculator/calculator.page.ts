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
  coffeeTpe: string = "";
  cityName: string = "";
  countryName: string = "";
  preferenceChosen: [];

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
}
