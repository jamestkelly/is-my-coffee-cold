import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userEmail: string = ""
  password: string = ""
  constructor
  (
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router,
    public location: Location
  ) { }

  logoutUser() {
    return new Promise((resolve, reject) => {
      if (this.auth.currentUser) {
        this.auth.signOut().then(() => {
          console.log("Log out");
          resolve("logged out");
        }).catch((error) => {
          reject();
        });
      }
    })
  }
}
