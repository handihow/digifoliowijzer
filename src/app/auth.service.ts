import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import { UserState, MoSCoWRequirement } from './auth/user.state.model';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import Row from './auth/moscow.row.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _unsubscribe: Subscription | undefined;

  constructor(
    public auth: AngularFireAuth,
    private router: Router,
    private db: AngularFirestore
  ) { }

  observeAuthState(){
    return this.auth.authState;
  }

  async setUser(user: firebase.User){
    const currentUser = await this.db
      .collection('users')
      .doc(user.uid)
      .get().toPromise();
    if (!currentUser.exists) {
      await this.db.collection('users').doc(user.uid).set(this._createDefaultUserState(user.uid));
    }
    this.startObserveUser(user.uid);
  }

  private startObserveUser(userId: string){
    this._unsubscribe = this.db.collection('users').doc(userId).valueChanges().subscribe(state=> {
      if (state) {
        const userState = state as UserState;
        this._userState.next(userState);
        this.router.navigateByUrl(userState.currentPage);
      }
    })
  }

  unsetUser(){
    this.stopObserveUser();
    this._userState.next(this._createDefaultUserState(''));
    this.router.navigateByUrl('/login');
  }

  private stopObserveUser(){
    if(this._unsubscribe){
      this._unsubscribe.unsubscribe();
    }
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
      componentStep: 1,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
      hasAdvancedUI: false,
      hasHiddenInfoMessage: false,
      ageGroupIsAvailable: {
        fourToSix: true,
        sevenToNine: true,
        tenToTwelve: true
      },
      portfolioRequirements: {
        development: {
          fourToSix: 0,
          sevenToNine: 0,
          tenToTwelve: 0
        },
        evaluation: {
          fourToSix: 0,
          sevenToNine: 0,
          tenToTwelve: 0
        },
        presentation: {
          fourToSix: 100,
          sevenToNine: 100,
          tenToTwelve: 100
        },
      },
      portfolioType: {
        fourToSix: 0,
        sevenToNine: 40,
        tenToTwelve: 100
      },
      childContribution: {
        development: {
          fourToSix: false,
          sevenToNine: false,
          tenToTwelve: false
        },
        evaluation: {
          fourToSix: false,
          sevenToNine: false,
          tenToTwelve: false
        },
        presentation: {
          fourToSix: false,
          sevenToNine: false,
          tenToTwelve: false
        },
      },
      parentContribution: {
        development: {
          fourToSix: false,
          sevenToNine: false,
          tenToTwelve: false
        },
        evaluation: {
          fourToSix: false,
          sevenToNine: false,
          tenToTwelve: false
        },
        presentation: {
          fourToSix: false,
          sevenToNine: false,
          tenToTwelve: false
        },
      },
      additionalRequirements: {
        canLoginAtHome: MoSCoWRequirement.WONT,
        canBePrinted: MoSCoWRequirement.WONT,
        isLinkedToStudentTrackingSystem: MoSCoWRequirement.WONT,
        canBeAddedStudentProgramsAndGoals: MoSCoWRequirement.WONT,
        studentCanCreatePlanning: MoSCoWRequirement.WONT,
        teacherCanSelectGoals: MoSCoWRequirement.WONT,
        hasChatFunctionality: MoSCoWRequirement.WONT,
        hasGroupOverviewFunctionality: MoSCoWRequirement.WONT,
        reportsOfConversationsWithStudentsArePartOfPortfolio: MoSCoWRequirement.WONT,
        isCommunicationPlatformWithParents: MoSCoWRequirement.WONT
      },
      canBeUsedOnDevices: '',
      isFinished: false
    }
    return defaultUserState;
  }

  private _userState: BehaviorSubject<UserState> = new BehaviorSubject({
    ...this._createDefaultUserState(''),
  });

  public readonly userState: Observable<UserState> = this._userState.asObservable();

  updateUserState(data: UserState) {
    this.db.collection('users').doc(data.id).set(data);
  }

  updateUserStateComponent(userId: string, component: string) {
    this.db.collection('users').doc(userId).update({
      componentStep: 1,
      currentPage: component,
      updatedAt: firebase.firestore.Timestamp.now(),
    });
  }

  updateUserStateComponentStep(userId: string, step: number) {
    this.db.collection('users').doc(userId).update({
      componentStep: step,
      updatedAt: firebase.firestore.Timestamp.now(),
    });
  }

  updateUIMode(userId: string, hasAdvancedUI: boolean){
    this.db.collection('users').doc(userId).update({
      hasAdvancedUI: hasAdvancedUI,
      updatedAt: firebase.firestore.Timestamp.now(),
    });
  }

  updateHideInfoMessage(userId: string){
    this.db.collection('users').doc(userId).update({
      hasHiddenInfoMessage: true,
      updatedAt: firebase.firestore.Timestamp.now()
    })
  }

  setUserStateToFinished(userId: string){
    this.db.collection('users').doc(userId).update({
      isFinished: true,
      updatedAt: firebase.firestore.Timestamp.now()
    });
  }

}
