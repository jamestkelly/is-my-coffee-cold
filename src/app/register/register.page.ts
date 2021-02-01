import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

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
    public router: Router,
    public location: Location
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
    // Verify something is entered
    if (userEmail === "" && password === "") {
      this.showAlert("Error!", "Invalid email address or password");
      return console.error("Invalid email or password.");
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

  goBack() {
    this.location.back();
  }
}
