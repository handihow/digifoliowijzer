import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth, private router: Router) { }

  getCurrentUser() {
  	return this.auth.authState;
  }

  login() {
    this.auth.signInAnonymously()
    .then(_ => {
    	this.router.navigateByUrl("/auth");
    });
  }

  logout() {
    this.auth.signOut()
    .then(_ => {
      this.router.navigateByUrl("/login");
    });;
  }
}
