import { Component, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import {Subscription} from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  userSub: Subscription;
  isLoggedIn: boolean = false;

  constructor(private authService: AuthService) {
  	this.userSub = this.authService.getCurrentUser().subscribe(user => {
  		if(user){
  			this.isLoggedIn = true;
  		} else {
  			this.isLoggedIn = false;
  		}
  	})
  }

  ngOnDestroy(){
  	this.userSub.unsubscribe();
  }
}
