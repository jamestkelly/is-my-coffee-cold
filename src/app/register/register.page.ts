import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  userEmail: string = ""
  password: string = ""
  cPassword: string = ""
  constructor(
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async signUp() {
    const { userEmail, password, cPassword } = this;

    // Verify passwords match
    if (password !== cPassword) {
      this.showAlert("Error!", "Passwords do not match");
      return console.error("Passwords do not match.");
    }

    try
    {
      const result = await this.auth.createUserWithEmailAndPassword(userEmail, password);
      console.log(result);
      this.showAlert("Success!", "Please login to continue.");
      this.router.navigate(['../login']);
    }
    catch(err)
    {
      console.dir(err);
      this.showAlert("Error!", err.message);
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
}
