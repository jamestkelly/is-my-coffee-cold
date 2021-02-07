import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CoffeePreferenceService } from '../services/coffee-preference.service';
import { NavController, NavParams } from '@ionic/angular';
import { coffeePreference } from '../shared/coffeePreference';

interface PreferenceData {
  preferenceName: string;
  coffeeType: string;
  cityName: string;
  countryName: string;
}

@Component({
  selector: 'app-preferences',
  templateUrl: 'preferences.page.html',
  styleUrls: ['preferences.page.scss']
})
export class PreferencesPage {
//export class PreferencesPage implements OnInit {
  preferenceList = [];
  preferenceData: PreferenceData;
  preferenceForm: FormGroup;

  constructor
  (
    private coffeeService: CoffeePreferenceService,
    private route: Router,
    public navCtrl: NavController,
    public fb: FormBuilder
  )
  {
    this.preferenceData = {} as PreferenceData;
  }

  ngOnInit() {
    this.preferenceForm = this.fb.group({
      preferenceName: ['', [Validators.required]],
      coffeeType: ['', [Validators.required]],
      cityName: ['', [Validators.required]],
      countryName: ['', [Validators.required]]
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
      console.log(this.preferenceList);
    });
  }

  // Implements createPreference() from coffeeService to create a user preference.
  createPreference() {
    console.log(this.preferenceForm.value);
    this.coffeeService.createPreference(this.preferenceForm.value).then(response => {
      this.preferenceForm.reset();
      console.log(response);
    })
      .catch(error => {
        console.log(error);
      });
  }

  // Method to delete a preference object
  removePreference(id) {
    this.coffeeService.deletePreference(id);
  }

  // Method to edit a preference object
  editPreference(preference) {
    preference.isEdit = true;
    preference.EditPreferenceName = preference.preferenceName;
    preference.EditCoffee = preference.coffeeType;
    preference.EditCity = preference.cityName;
    preference.EditCountry = preference.countryName;
  }

  // Method to update a preference object
  updatePreference(preferenceRow) {
    let preference = {};
    preference['preferenceName'] = preferenceRow.EditPreferenceName;
    preference['coffeeType'] = preferenceRow.EditCoffee;
    preference['cityName'] = preferenceRow.EditCity;
    preference['countryName'] = preferenceRow.EditCountry;
    this.coffeeService.updatePreferences(preferenceRow.id, preference);
    preferenceRow.isEdit = false;
  }
}
