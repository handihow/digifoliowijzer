import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthRoutingModule } from './auth.routing.module';
import { SharedModule } from '../shared/shared.module';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { InformationComponent } from './information/information.component';
import { ChoicesComponent } from './choices/choices.component';
import { RequirementsComponent } from './requirements/requirements.component';
import { RequirementsInformationComponent } from './requirements/requirements-information/requirements-information.component';
import { QuestionsPageOneComponent } from './requirements/questions-page-one/questions-page-one.component';
import { MoscowButtonsComponent } from './moscow-buttons/moscow-buttons.component';
import { MoscowInfoModalComponent } from './moscow-info-modal/moscow-info-modal.component';
import { MoscowTitleColumnsComponent } from './moscow-title-columns/moscow-title-columns.component';
import { QuestionsPageTwoComponent } from './requirements/questions-page-two/questions-page-two.component';

import { QuestionsPageThreeComponent } from './requirements/questions-page-three/questions-page-three.component';
import { QuestionsPageFourComponent } from './requirements/questions-page-four/questions-page-four.component';
import { QuestionsPageFiveComponent } from './requirements/questions-page-five/questions-page-five.component';
import { BooleanColumnsSelectorComponent } from './boolean-columns-selector/boolean-columns-selector.component';
import { MoscowTitleColumnComponent } from './moscow-title-column/moscow-title-column.component';

@NgModule({
  declarations: [
	  InformationComponent,
	  ChoicesComponent,
	  RequirementsComponent,
    RequirementsInformationComponent,
	  QuestionsPageOneComponent,
	  MoscowButtonsComponent,
	  MoscowInfoModalComponent,
	  MoscowTitleColumnsComponent,
	  QuestionsPageTwoComponent,
	  QuestionsPageThreeComponent,
	  QuestionsPageFourComponent,
	  QuestionsPageFiveComponent,
	  BooleanColumnsSelectorComponent,
	  MoscowTitleColumnComponent
  ],
  imports: [
    CommonModule,
    AngularFirestoreModule,
    RouterModule,
    FontAwesomeModule,
    AuthRoutingModule,
    SharedModule
  ],
  exports: []
})
export class AuthenticatedModule { }
