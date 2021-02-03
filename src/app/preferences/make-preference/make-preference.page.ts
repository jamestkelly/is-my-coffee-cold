import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { CoffeePreferenceService } from 'src/app/services/coffee-preference.service';

@Component({
  selector: 'app-make-preference',
  templateUrl: './make-preference.page.html',
  styleUrls: ['./make-preference.page.scss'],
})
export class MakePreferencePage implements OnInit {
  preferenceForm: FormGroup;
  preferenceList = [];

  constructor
  (
    private coffeePref: CoffeePreferenceService,
    private route: Router,
    public location: Location,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.preferenceForm = this.fb.group({
      preferenceName: [''],
      countryName: [''],
      cityName: [''],
      coffeeType: ['']
    })
  }

  goBack() {
    this.location.back();
  }

  formSubmit() {
    if (!this.preferenceForm.valid)
    {
      return false;
    }
    else
    {
      this.coffeePref.createPreference(this.preferenceForm.value).then(result =>{
        console.log(result);
        this.preferenceForm.reset();
        this.route.navigate(['/preferences']);
      })
        .catch(error => console.log(error));
    }
  }
}
