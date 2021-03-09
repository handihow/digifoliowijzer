import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import firebase from 'firebase/app';
import { UserState } from './auth/user.state.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  userState: UserState | undefined;
  authObserver: Subscription| undefined;
  routerSub: Subscription | undefined;
  stateSub: Subscription | undefined;
  currentUrl: string = '';

  constructor(private authService: AuthService,private router: Router) {
  }

  ngOnInit(){
    this.authObserver = this.authService.observeAuthState().subscribe(user => {
      if (user) {
        this.authService.setUser(user);
        this.isLoggedIn = true;
      } else {
        this.authService.unsetUser();
        this.isLoggedIn = false;
      }
    });
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
    this.stateSub = this.authService.userState.subscribe(state => {
      if(state.id.length === 0) return;
      this.userState = state;
      this.currentUrl = state.currentPage;
    })
  }

  ngOnDestroy(){
    if(this.authObserver){
      this.authObserver.unsubscribe();
    }
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    if(this.stateSub){
      this.stateSub.unsubscribe();
    }
  }

}
