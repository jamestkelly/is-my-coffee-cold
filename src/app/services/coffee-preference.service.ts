import { Injectable } from '@angular/core';
import { coffeePreference } from '../shared/coffeePreference';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CoffeePreferenceService {
  collectionName = 'Preferences';

  constructor
  (
    private firestore: AngularFirestore
  ) { }

  // Create a new calculation preference in the specified collection
  createPreference(preference) {
    return this.firestore.collection(this.collectionName).add(preference);
  }

  // Call `snapshotChanges()` method to read records and subscribe for updates
  readPreferences() {
    return this.firestore.collection(this.collectionName).snapshotChanges();
  }

  // Method utilising `doc()` to take collection name and document ID to update preference
  updatePreferences(preferenceID, preference) {
    this.firestore.doc(this.collectionName + '/' + preferenceID).update(preference);
  }

  // Method to delete a preference
  deletePreference(preferenceID) {
    this.firestore.doc(this.collectionName + '/' + preferenceID).delete();
  }
}
