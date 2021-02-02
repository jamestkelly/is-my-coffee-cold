import { Injectable } from '@angular/core';
import { coffeePreference } from '../shared/coffeePreference';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CoffeePreferenceService {
  preferenceListRef: AngularFireList<any>;
  preferenceRef: AngularFireObject<any>;

  constructor
  (
    private db: AngularFireDatabase
  ) { }

  // Method to create user coffee calculation preference
  createPreference(coffeePref: coffeePreference) {
    return this.preferenceListRef.push({
      preferenceName: coffeePref.preferenceName,
      countryName: coffeePref.countryName,
      cityName: coffeePref.cityName,
      coffeeType: coffeePref.coffeeType
    })
  }

  // Method to get a single coffee preference object as saved by user
  getPreference(id: string) {
    this.preferenceRef = this.db.object('/preference/' + id);
    return this.preferenceRef;
  }

  // Method to get the entire list of user created preferences
  getPreferenceList() {
    this.preferenceListRef = this.db.list('/preference');
    return this.preferenceListRef;
  }

  // Method to update the list of user preferences
  updatePreference(id, coffeePref: coffeePreference) {
    return this.preferenceRef.update({
      preferenceName: coffeePref.preferenceName,
      countryName: coffeePref.countryName,
      cityName: coffeePref.cityName,
      coffeeType: coffeePref.coffeeType
    })
  }

  // Method to delete preference from user preferences
  deletePreference(id: string) {
    this.preferenceRef = this.db.object('/preference/' + id);
    this.preferenceRef.remove();
  }
}
