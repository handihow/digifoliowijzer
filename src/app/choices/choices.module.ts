import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ChoicesRoutingModule } from './choices.routing.module';

import { ChoicesComponent } from '../choices/choices.component';

@NgModule({
  declarations: [ChoicesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ChoicesRoutingModule
  ]
})
export class ChoicesModule { }
