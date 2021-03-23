import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ComponentStepButtonsComponent } from './component-step-buttons/component-step-buttons.component';

@NgModule({
  declarations: [
    ComponentStepButtonsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ComponentStepButtonsComponent
  ]
})
export class SharedModule { }
