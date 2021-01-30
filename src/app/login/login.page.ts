import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TabsPage } from '../tabs/tabs.page';

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
    public router: Router
    ) { }

  ngOnInit() {
  }

  async login() {
    const { userEmail, password } = this;
    try {
      const result = await this.auth.signInWithEmailAndPassword(userEmail, password);
      this.router.navigateByUrl("../tabs/tabs.page.html");
    }
    catch(err) {
      console.dir(err);
    }
  }

  register() {
    this.router.navigate(['./register']);
  }
}
