import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import firebase from 'firebase/app';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  userEmail: string = ""
  constructor
  (
    public auth: AngularFireAuth,
    public alert: AlertController,
    public location: Location,
    public router: Router
  ) { }

  ngOnInit() {
  }

  async resetPassword() {
    const { userEmail } = this;
    if (userEmail === "" || userEmail === " ") {
      this.showAlert("Error!", "Please enter a valid email address.");
      return console.error("Please enter a valid email address.");
    }
    try
    {
      const result = await this.auth.sendPasswordResetEmail(userEmail);
      this.showAlert("Success!", "Please check your email for a link to reset your password.");
      console.log(result);
    }
    catch(err)
    {
      console.dir(err);
    }
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["Okay"]
    })

    await alert.present();
  }

  goBack() {
    this.location.back();
  }
}
