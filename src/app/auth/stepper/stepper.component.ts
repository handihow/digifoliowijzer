import { Component, Input } from '@angular/core';
import { AuthService } from '../../auth.service';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {

  faSignOutAlt = faSignOutAlt;
  @Input() step: number = 1;

  constructor(private authService: AuthService) {
  }

  logout(){
  	this.authService.logout();
  }


}
