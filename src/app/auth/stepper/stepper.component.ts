import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {

  @Input() step: number = 1;

  constructor(private authService: AuthService) {
  }
  
  logout(){
  	this.authService.logout();
  }
  

}
