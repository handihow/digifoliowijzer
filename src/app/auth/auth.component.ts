import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';
import firebase from 'firebase/app';

import { UserState } from '../models/user.state.model';
import Settings  from './settings';
import AuthSection from '../models/auth.section.model';

@Component({
  selector: 'app-authenticated',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthenticatedComponent  implements OnInit, OnDestroy {
  stateSub: Subscription | undefined;
  routerSub: Subscription | undefined;
  userState: UserState | undefined;
  currentUrl: string = '/auth/information';
  sections: AuthSection[] = Settings.authSections;
  currentSection: AuthSection | undefined;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    this.stateSub = this.authService.userState.subscribe(state => {
      if(state.id.length === 0) return;
      this.userState = state;
      this.currentUrl = state.currentPage;
      this.currentSection = this.sections.find(s => s.currentPage === state.currentPage);
    })
    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_event) => {
        if (this.userState) {
          this.authService.updateUserState({
            ...this.userState,
            updatedAt: firebase.firestore.Timestamp.now(),
            currentPage: this.router.url,
            componentStep: this.router.url === this.userState.currentPage ? (this.userState.componentStep || 1) : 1
          });
        }
      });
  }

  ngOnDestroy(){
    if(this.stateSub){
      this.stateSub.unsubscribe();
    }
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
  }

}
