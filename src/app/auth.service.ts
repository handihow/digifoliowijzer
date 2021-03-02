import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { UserState, MoSCoWRequirement, PortfolioType } from './auth/user.state.model';
import { BehaviorSubject, Observable } from 'rxjs';
import Row from './auth/moscow.row.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _initialUserState: UserState = {
    id: '',
    currentPage: '/login',
    createdAt: firebase.firestore.Timestamp.now(),
    updatedAt: firebase.firestore.Timestamp.now(),
  };

  private _userState: BehaviorSubject<UserState> = new BehaviorSubject(this._initialUserState);

  public readonly userState: Observable<UserState> = this._userState.asObservable();

  private _rows: Row[] = [
    {
      title: '4-6 jaar',
      property: 'fourToSix',
    },
    {
      title: '7-9 jaar',
      property: 'sevenToNine',
    },
    {
      title: '10-12 jaar',
      property: 'tenToTwelve',
    },
  ];

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) { }

  observeAuthState(){
    return this.auth.authState;
  }

  setUser(user: firebase.User){
    this.db
      .collection('users')
      .doc(user.uid)
      .valueChanges()
      .subscribe((data) => {
        if (data) {
          const userState = data as UserState;
          this._userState.next(userState);
          this.router.navigateByUrl(userState.currentPage);
        } else {
          this.db.collection('users').doc(user.uid).set(this._createDefaultUserState(user.uid));
          this.router.navigateByUrl('/auth');
        }
      });
  }

  unsetUser(){
    this._userState.next(this._initialUserState);
    this.router.navigateByUrl('/login');
  }

  login() {
    this.auth.signInAnonymously();
  }

  logout() {
    this.auth.signOut();
  }

  private _createDefaultUserState = (userId: string) : UserState => {
    const defaultUserState : UserState = {
      id: userId,
      currentPage: '/auth',
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
      portfolioRequirements: {
        development: {
          fourToSix: MoSCoWRequirement.WONT,
          sevenToNine: MoSCoWRequirement.COULD,
          tenToTwelve: MoSCoWRequirement.MUST
        },
        evaluation: {
          fourToSix: MoSCoWRequirement.COULD,
          sevenToNine: MoSCoWRequirement.MUST,
          tenToTwelve: MoSCoWRequirement.MUST
        },
        presentation: {
          fourToSix: MoSCoWRequirement.MUST,
          sevenToNine: MoSCoWRequirement.MUST,
          tenToTwelve: MoSCoWRequirement.MUST
        },
      },
      portfolioType: {
        fourToSix: PortfolioType.PAPER,
        sevenToNine: PortfolioType.MIXED,
        tenToTwelve: PortfolioType.DIGITAL
      }
    }
    return defaultUserState;
  }

  updateUserState(userId: string, data: UserState) {
    this.db.collection('users').doc(userId).set(data);
  }

  updateUserStateComponentStep(userId: string, step: number) {
    this.db.collection('users').doc(userId).update({
      componentStep: step,
      updatedAt: firebase.firestore.Timestamp.now(),
    });
  }

  getRows(){
    return [... this._rows];
  }
}
