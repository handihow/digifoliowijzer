import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequirementsRoutingModule } from './requirements.routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { RequirementsComponent } from './requirements.component';
import { RequirementsInformationComponent } from './requirements-information/requirements-information.component';
import { QuestionsPageOneComponent } from './questions-page-one/questions-page-one.component';
import { MoscowButtonsComponent } from './partials/moscow-buttons/moscow-buttons.component';
import { MoscowInfoModalComponent } from './partials/moscow-info-modal/moscow-info-modal.component';
import { TableTitleColumnsComponent } from './partials/table-title-columns/table-title-columns.component';
import { QuestionsPageTwoComponent } from './questions-page-two/questions-page-two.component';

import { QuestionsPageThreeComponent } from './questions-page-three/questions-page-three.component';
import { QuestionsPageFourComponent } from './questions-page-four/questions-page-four.component';
import { QuestionsPageFiveComponent } from './questions-page-five/questions-page-five.component';
import { BooleanColumnsSelectorComponent } from './partials/boolean-columns-selector/boolean-columns-selector.component';
import { TableTitleColumnComponent } from './partials/table-title-column/table-title-column.component';


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
    FontAwesomeModule,
    RequirementsRoutingModule
  ]
})
export class RequirementsModule { }
