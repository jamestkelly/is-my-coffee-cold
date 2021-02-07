import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  userEmail: string = ""
  password: string = ""
  constructor(
    public auth: AngularFireAuth,
    public alert: AlertController,
    public router: Router
    ) { }

  ngOnInit() {
  }

  async login() {
    const { userEmail, password } = this;
    try {
      const result = await this.auth.signInWithEmailAndPassword(userEmail, password);
      this.router.navigateByUrl('/tabs', { replaceUrl: true });
      console.log(result);
    }
    catch(err) {
      let errorCode = err.code;
      let errorMsg = err.message;
      if (errorCode === 'auth/wrong-password')
      {
        await this.showAlert("Invalid Password", "Please ensure you've entered your password correctly.");
      }
      else if (errorCode === 'auth/user-not-found')
      {
        await this.showAlert("Invalid Email", "Please ensure you've entered your email correctly.");
      }
      else
      {
        await this.showAlert("Invalid Details", errorMsg);
      }
    }
  }

  register() {
    this.router.navigate(['./register']);
  }

  forgotPassword() {
    this.router.navigate(['./reset-password']);
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
