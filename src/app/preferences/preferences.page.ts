import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { CoffeePreferenceService } from '../services/coffee-preference.service';
import { NavController, NavParams } from '@ionic/angular';
import { coffeePreference } from '../shared/coffeePreference';

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
    public navCtrl: NavController,
    public fb: FormBuilder
  ) {}

  ngOnInit() {
    this.fetchPreferences();
  }

  fetchPreferences() {
    this.coffeeService.getPreferenceList().valueChanges().subscribe(result => {
      console.log(result);
    })
  }

  deletePreference(id) {
    console.log(id);
    if (window.confirm('Are you sure you would like to delete this preference?'))
    {
      this.coffeeService.deletePreference(id);
    }
  }

  goEdit() {
    this.router.navigateByUrl('./make-preference');
  }
}
