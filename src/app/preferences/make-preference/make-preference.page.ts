import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { CoffeePreferenceService } from 'src/app/services/coffee-preference.service';

interface PreferenceData {
  preferenceName: string;
  coffeeType: string;
  cityName: string;
  countryName: string;
}

@Component({
  selector: 'app-make-preference',
  templateUrl: './make-preference.page.html',
  styleUrls: ['./make-preference.page.scss'],
})
export class MakePreferencePage {
  preferenceList = [];
  preferenceData: PreferenceData;
  preferenceForm: FormGroup;

  constructor
  (
    private coffeeService: CoffeePreferenceService,
    public location: Location,
    public fb: FormBuilder
  )
  {
    this.preferenceData = {} as PreferenceData;
  }

  ngOnInit() {
    this.preferenceForm = this.fb.group({
      preferenceName: [''],
      countryName: [''],
      cityName: [''],
      coffeeType: ['']
    })
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
    });
  }

  createPreference() {
    console.log(this.preferenceForm.value);
    this.coffeeService.createPreference(this.preferenceForm.value).then(response => {
      this.preferenceForm.reset();
      console.log(response);
      this.location.back();
    })
      .catch(error => {
        console.log(error);
      });
  }

  goBack() {
    this.location.back();
  }
}
