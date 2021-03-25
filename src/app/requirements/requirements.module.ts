import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RequirementsRoutingModule } from './requirements.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RequirementsComponent } from '../requirements/requirements.component';
import { RequirementsInformationComponent } from '../requirements/requirements-information/requirements-information.component';
import { QuestionsPageOneComponent } from '../requirements/questions-page-one/questions-page-one.component';
import { MoscowButtonsComponent } from '../requirements/partials/moscow-buttons/moscow-buttons.component';
import { MoscowInfoModalComponent } from '../requirements/partials/moscow-info-modal/moscow-info-modal.component';
import { TableTitleColumnsComponent } from '../requirements/partials/table-title-columns/table-title-columns.component';
import { QuestionsPageTwoComponent } from '../requirements/questions-page-two/questions-page-two.component';

import { QuestionsPageThreeComponent } from '../requirements/questions-page-three/questions-page-three.component';
import { QuestionsPageFourComponent } from '../requirements/questions-page-four/questions-page-four.component';
import { QuestionsPageFiveComponent } from '../requirements/questions-page-five/questions-page-five.component';
import { BooleanColumnsSelectorComponent } from '../requirements/partials/boolean-columns-selector/boolean-columns-selector.component';
import { TableTitleColumnComponent } from '../requirements/partials/table-title-column/table-title-column.component';


@NgModule({
  declarations: [
    RequirementsComponent,
    RequirementsInformationComponent,
	  QuestionsPageOneComponent,
	  MoscowButtonsComponent,
	  MoscowInfoModalComponent,
	  TableTitleColumnsComponent,
	  QuestionsPageTwoComponent,
	  QuestionsPageThreeComponent,
	  QuestionsPageFourComponent,
	  QuestionsPageFiveComponent,
	  BooleanColumnsSelectorComponent,
	  TableTitleColumnComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    RequirementsRoutingModule
  ]
})
export class RequirementsModule { }
