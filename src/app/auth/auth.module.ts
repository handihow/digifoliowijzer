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
import { RequirementsInformationComponent } from './requirements/requirements-information/requirements-information.component';
import { QuestionsPageOneComponent } from './requirements/questions-page-one/questions-page-one.component';
import { MoscowSliderComponent } from './moscow-slider/moscow-slider.component';

@NgModule({
  declarations: [
    AuthenticatedComponent,
    StepperComponent,
    TitlebarComponent,
	  InformationComponent,
	  ChoicesComponent,
	  RequirementsComponent,
	  OverviewComponent,
	  RequirementsInformationComponent,
	  QuestionsPageOneComponent,
	  MoscowSliderComponent
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
