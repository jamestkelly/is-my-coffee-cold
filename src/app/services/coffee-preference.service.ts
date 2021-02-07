import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { coffeePreference } from '../shared/coffeePreference';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class CoffeePreferenceService {
  collectionName = 'userPreferences';
  userCollectionName = 'Preferences'

  constructor
  (
    private fire: AngularFirestore,
    private auth: AngularFireAuth,
  ) { }

  // Create a new calculation preference in the specified collection
  createPreference(preference) {
    console.log(firebase.auth().currentUser);
    let currentUser = firebase.auth().currentUser;
    return this.fire.collection(this.collectionName).doc(currentUser.uid).collection(this.userCollectionName).add(preference);
  }

  // Call `snapshotChanges()` method to read records and subscribe for updates
  readPreferences() {
    let currentUser = firebase.auth().currentUser;
    /*return new Promise<any>((resolve, reject) => {
      this.auth.user.subscribe(currentUser =>{
        if (currentUser) {
          const snapshotChangesSubscription = this.fire.collection(this.collectionName).doc(currentUser.uid).collection(this.userCollectionName).snapshotChanges();
          resolve(snapshotChangesSubscription);
        }
      })
    })*/
    return this.fire.collection(this.collectionName).doc(currentUser.uid).collection(this.userCollectionName).snapshotChanges();
  }

  // Method utilising `doc()` to take collection name and document ID to update preference
  updatePreferences(preferenceID, preference) {
    let currentUser = firebase.auth().currentUser;
    this.fire.doc(this.collectionName + '/' + currentUser.uid + '/' + this.userCollectionName + '/' + preferenceID).update(preference);
  }

  // Method to delete a preference
  deletePreference(preferenceID) {
    let currentUser = firebase.auth().currentUser;
    this.fire.doc(this.collectionName + '/' + currentUser.uid + '/' + this.userCollectionName + '/' + preferenceID).delete();
  }
}
