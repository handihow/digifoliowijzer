import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StepperComponent } from './stepper/stepper.component';
import { TitlebarComponent } from './titlebar/titlebar.component';

import { AuthenticatedComponent } from './auth.component';
import { InformationComponent } from './information/information.component';
import { ChoicesComponent } from './choices/choices.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { OverviewComponent } from './overview/overview.component';
import { RequirementsInformationComponent } from './requirements/requirements-information/requirements-information.component';
import { QuestionsPageOneComponent } from './requirements/questions-page-one/questions-page-one.component';
import { MoscowButtonsComponent } from './moscow-buttons/moscow-buttons.component';
import { MoscowInfoModalComponent } from './moscow-info-modal/moscow-info-modal.component';
import { MoscowColumnsSelectorComponent } from './moscow-columns-selector/moscow-columns-selector.component';
import { MoscowTitleColumnsComponent } from './moscow-title-columns/moscow-title-columns.component';
import { QuestionsPageTwoComponent } from './requirements/questions-page-two/questions-page-two.component';
import { ComponentStepButtonsComponent } from './component-step-buttons/component-step-buttons.component';

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
	  MoscowButtonsComponent,
	  MoscowInfoModalComponent,
	  MoscowColumnsSelectorComponent,
	  MoscowTitleColumnsComponent,
	  QuestionsPageTwoComponent,
	  ComponentStepButtonsComponent,
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    AuthenticatedComponent
  ]
})
export class AuthenticatedModule { }
