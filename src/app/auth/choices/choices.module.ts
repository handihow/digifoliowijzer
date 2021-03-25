import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChoicesRoutingModule } from './choices.routing.module';

import { ChoicesComponent } from './choices.component';

@NgModule({
  declarations: [ChoicesComponent],
  imports: [
    CommonModule,
    ChoicesRoutingModule
  ]
})
export class ChoicesModule { }
