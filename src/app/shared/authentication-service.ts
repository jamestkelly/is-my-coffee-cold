import { Injectable, NgZone } from '@angular/core';
import { auth } from 'firebase/firebase-auth';
import { User } from "./user";
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class AuthenticationService {
    userData: any;

    constructor(
        public afStore: AngularFirestore,
        public ngFireAuth: AngularFireAuth,
        public router: Router,
        public ngZone: NgZone
    ) {
        this.ngFireAuth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        })
    }

    // Email & password login authentication
    SignIn(email, password) {
        return this.ngFireAuth.signInWithEmailAndPassword(email, password)
    }

    // Registration with email & password
    RegisterUser(email, password) {
        return this.ngFireAuth.createUserWithEmailAndPassword(email, password);
    }

    // Verification process for new user registration
    SendVerificationMail() {
        return this.ngFireAuth.currentUser.then(u => u.sendEmailVerification())
        .then(() => {
            this.router.navigate(['verify-email']);
        })
    }

    // Password recovery process
    RecoverPassword(passwordResetEmail) {
        return this.ngFireAuth.sendPasswordResetEmail(passwordResetEmail)
        .then(() => {
            window.alert('An email to reset your password has been sent, please check your inbox');
        }).catch((error) => {
            window.alert(error)
        })
    }

    /*
        Method to check when user is logged in:
        Returns true if user is already signed in.
    */
    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return (user !== null && user.emailVerified !== false) ? true : false;
    }

    /*
        Method to check if user email has been verified:
        Returns true if the user has been verified.
    */
   get isEmailVerified(): boolean {
       const user = JSON.parse(localStorage.getItem('user'));
       return (user.emailVerified !== false) ? true : false;
   }

   // Method to sign in with G-mail account
   GoogleAuth() {
       return this.AuthLogin(new auth.GoogleAuthProvider);
   }

   // Authentication logic for authentication providers
   AuthLogin(provider) {
       return this.ngFireAuth.signInWithPopup(provider)
       .then((result) => {
           this.ngZone.run(() => {
                this.router.navigate(['tab1']);
           })
           this.SetUserData(result.user);
       }).catch((error) => {
           window.alert(error)
       })
   }

   // Store user information in localStorage
   SetUserData(user) {
       const userRef: AngularFirestoreDocument<any> = this.afStore.doc(`users/${user.uid}`);
       const userData: User = {
           uid: user.uid,
           email: user.email,
           displayName: user.displayName,
           photoURL: user.photoURL,
           emailVerified: user.emailVerified
       }
       return userRef.set(userData, {
           merge: true
       })
   }

   // Method for user sign out process
   SignOut() {
       return this.ngFireAuth.signOut().then(() => {
           localStorage.removeItem('user');
           this.router.navigate(['login']);
       })
   }
}