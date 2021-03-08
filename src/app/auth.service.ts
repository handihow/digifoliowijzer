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

  private _additionalRequirementRows: Row[] = [
    {
      title: "Wil je dat ouders en kinderen ook thuis kunnen inloggen op het digitale portfolio?",
      property: "canLoginAtHome"
    },
    {
      title: "Wil je dat het digitale portfolio af te drukken is?",
      property: "canBePrinted"
    },
    {
      title: "Wil je dat het digitale portfolio een automatische koppeling heeft met verwerkingssoftware en/of LOVS?",
      property: "isLinkedToStudentTrackingSystem"
    },
    {
      title: "Wil je zelf leerlijnen en leerdoelen kunnen toevoegen aan het digitale portfolio?",
      property: "canBeAddedStudentProgramsAndGoals"
    },
    {
      title: "Wil je dat leerlingen zelf kunnen kiezen en plannen aan welke doelen ze werken?",
      property: "studentCanCreatePlanning"
    },
    {
      title: "Wil je als leerkracht doelen kunnen selecteren voor kinderen in het digitale portfolio waar een kind een bepaalde periode aan moet werken?",
      property: "teacherCanSelectGoals"
    },
    {
      title: "Wil je als leerkracht via het digitale portfolio kunnen chatten met kinderen?",
      property: "hasChatFunctionality"
    },
    {
      title: "Wil je in de omgeving van het digitale portfolio een groepsoverzicht hebben van alle kinderen?",
      property: "hasGroupOverviewFunctionality"
    },
    {
      title: "Wil je dat verslagjes van kindgesprekken onderdeel worden van je digitale portfolio?",
      property: "reportsOfConversationsWithStudentsArePartOfPortfolio"
    },
    {
      title: "Wil je dat het digitale portfolio ook fungeert als een communicatiemiddel met ouders voor bijv. het versturen van planningen of nieuwsbrieven?",
      property: "isCommunicationPlatformWithParents"
    }
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
    this._userState.next(this._createDefaultUserState(''));
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
      componentStep: 1,
      createdAt: firebase.firestore.Timestamp.now(),
      updatedAt: firebase.firestore.Timestamp.now(),
      hasAdvancedUI: false,
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
        canLoginAtHome: MoSCoWRequirement.MUST,
        canBePrinted: MoSCoWRequirement.MUST,
        isLinkedToStudentTrackingSystem: MoSCoWRequirement.COULD,
        canBeAddedStudentProgramsAndGoals: MoSCoWRequirement.WONT,
        studentCanCreatePlanning: MoSCoWRequirement.COULD,
        teacherCanSelectGoals: MoSCoWRequirement.COULD,
        hasChatFunctionality: MoSCoWRequirement.MUST,
        hasGroupOverviewFunctionality: MoSCoWRequirement.WONT,
        reportsOfConversationsWithStudentsArePartOfPortfolio: MoSCoWRequirement.COULD,
        isCommunicationPlatformWithParents: MoSCoWRequirement.WONT
      },
      canBeUsedOnDevices: 'Computers, laptops en chromebooks',
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

  setUserStateToFinished(userId: string){
    this.db.collection('users').doc(userId).update({
      isFinished: true,
      updatedAt: firebase.firestore.Timestamp.now()
    });
  }

  getRows(){
    return [... this._rows];
  }

  getAdditionalRequirementRows(){
    return [... this._additionalRequirementRows];
  }

}
