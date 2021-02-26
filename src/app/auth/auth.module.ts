import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from '@angular/fire/firestore';

import { StepperComponent } from './stepper/stepper.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

import { AuthenticatedComponent } from './auth.component';
import { InformationComponent } from './information/information.component';
import { ChoicesComponent } from './choices/choices.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { OverviewComponent } from './overview/overview.component';

@NgModule({
  declarations: [
    AuthenticatedComponent,
    StepperComponent,
    TitlebarComponent,
	  InformationComponent,
	  ChoicesComponent,
	  RequirementsComponent,
	  OverviewComponent
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule
  ],
  exports: [
    AuthenticatedComponent
  ]
})
export class AuthenticatedModule { }
