import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthRoutingModule } from './auth.routing.module';

import { StepperComponent } from './partials/stepper/stepper.component';
import { TitlebarComponent } from './partials/titlebar/titlebar.component';
import { ComponentStepButtonsComponent } from './partials/component-step-buttons/component-step-buttons.component';
import { AuthenticatedComponent } from './auth.component';

@NgModule({
  declarations: [
    StepperComponent,
    TitlebarComponent,
    ComponentStepButtonsComponent,
    AuthenticatedComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
