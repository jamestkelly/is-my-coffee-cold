import { Component } from '@angular/core';
import { CoffeePreferenceService } from '../services/coffee-preference.service';
import { Resolve } from '@angular/router';

@Component({
  selector: 'app-calculator',
  templateUrl: 'calculator.page.html',
  styleUrls: ['calculator.page.scss']
})
export class CalculatorPage {
  //data: any;

  constructor
  (
    private coffeeService: CoffeePreferenceService
  ) {}
}
