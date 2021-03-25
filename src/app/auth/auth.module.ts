import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthRoutingModule } from './auth.routing.module';

import { StepperComponent } from './stepper/stepper.component';
import { TitlebarComponent } from './titlebar/titlebar.component';
import { AuthenticatedComponent } from './auth.component';

@NgModule({
  declarations: [
    StepperComponent,
    TitlebarComponent,
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
