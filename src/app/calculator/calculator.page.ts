import { Component } from '@angular/core';
import { CoffeePreferenceService } from '../services/coffee-preference.service';

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {

  constructor
  (
    private coffeeService: CoffeePreferenceService
  ) {}

  pleaseWork() {
    this.coffeeService.getLocalData('countryCodes.js');
  }
}
