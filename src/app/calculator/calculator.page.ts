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

  constructor
  (
    private coffeeService: CoffeePreferenceService
  ) {}

  public isManual: boolean = false;

  userSelectMethod($event) {
    this.isManual = !this.isManual;
  }
}
