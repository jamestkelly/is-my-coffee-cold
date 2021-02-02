import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CoffeePreferenceService } from '../services/coffee-preference.service';

@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.page.html',
  styleUrls: ['preferences.page.scss']
})
export class PreferencesPage implements OnInit {
  preferenceForm: FormGroup;

  constructor
  (
    private coffeeService: CoffeePreferenceService,
    private router: Router,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.preferenceForm = this.fb.group({
      preferenceName: [''],
      countryName: [''],
      cityName: [''],
      coffeeType: ['']
    })
  }

  formSubmit() {
    if (!this.preferenceForm.valid)
    {
      return false;
    }
    else
    {
      this.coffeeService.createPreference(this.preferenceForm.value).then(result => {
        console.log(result);
        this.preferenceForm.reset();
        this.router.navigate(['/'])
      })
    }
  }
}
