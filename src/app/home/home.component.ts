import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLoggingIn: boolean= false;

  constructor(private authService: AuthService) {
  }

  login(){
    this.isLoggingIn = true;
    this.authService.login();
  }

}
