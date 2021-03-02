import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UserState } from './user.state.model';
import firebase from 'firebase/app';

@Component({
  selector: 'app-authenticated',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthenticatedComponent implements OnInit {
  userState: UserState | undefined;
  routerSub: Subscription | undefined;
  stateSub: Subscription | undefined;
  currentUrl: string = '/auth/information';
  controls: any = {
    '/auth/information': {
      step: 1,
      title: 'Informatie vooraf',
      color: 'is-warning',
      previousPage: null,
      nextPage: '/auth/choices',
    },
    '/auth/choices': {
      step: 2,
      title: 'Keuzes maken',
      color: 'is-link',
      previousPage: 'auth/information',
      nextPage: '/auth/requirements',
    },
    '/auth/requirements': {
      step: 3,
      title: 'Set van eisen',
      subtitle: 'Fase 3 - opmaken van een set van eisen',
      color: 'is-primary',
      previousPage: '/auth/choices',
      nextPage: '/auth/overview',
    },
    '/auth/overview': {
      step: 4,
      title: 'Overzicht en rapport',
      color: 'is-success',
      previousPage: 'auth/requirements',
      nextPage: null,
    },
  };

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {

    this.stateSub = this.authService.userState.subscribe(state => {
      if(state.id.length === 0) return;
      this.userState = state;
      this.currentUrl = state.currentPage;
      this.router.navigateByUrl(this.currentUrl);
    })

    this.routerSub = this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((_event) => {
        if (this.userState) {
          this.authService.updateUserState(this.userState.id, {
            ...this.userState,
            updatedAt: firebase.firestore.Timestamp.now(),
            currentPage: this.router.url,
            componentStep: this.router.url === this.userState.currentPage ? (this.userState.componentStep || 1) : 1
          });
        }
      });
  }

  ngOnDestroy() {
    if (this.routerSub) {
      this.routerSub.unsubscribe();
    }
    if(this.stateSub){
      this.stateSub.unsubscribe();
    }
  }


}
