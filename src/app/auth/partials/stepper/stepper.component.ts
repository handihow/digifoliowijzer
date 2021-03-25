import { Component, Input } from '@angular/core';

import AuthSection from '../../../models/auth.section.model';
import Settings  from '../../settings';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {

  sections: AuthSection[] = Settings.authSections;

  constructor() {
  }




}
