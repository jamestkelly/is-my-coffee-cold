import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Location } from '@angular/common';
import { CoffeePreferenceService } from '../services/coffee-preference.service';

@Component({
  selector: 'app-make-preference',
  templateUrl: './make-preference.page.html',
  styleUrls: ['./make-preference.page.scss'],
})
export class MakePreferencePage implements OnInit {
  preferenceForm: FormGroup;

  constructor
  (
    private coffeeService: CoffeePreferenceService,
    private router: Router,
    public fb: FormBuilder,
    public location: Location
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
        this.router.navigate(['/preferences']);
      })
      .catch(error => console.dir(error));
    }
  }

  goBack() {
    this.location.back();
  }
}
