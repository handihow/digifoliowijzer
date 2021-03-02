import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  isLoggedIn: boolean = false;
  authObserver: Subscription| undefined;

  constructor(private authService: AuthService) {
  }

  ngOnInit(){
    this.authObserver = this.authService.observeAuthState().subscribe((user) => {
      if (user) {
        this.authService.setUser(user);
        this.isLoggedIn = true;
      } else {
        this.authService.unsetUser();
        this.isLoggedIn = false;
      }
    });
  }

  ngOnDestroy(){
    if(this.authObserver){
      this.authObserver.unsubscribe();
    }
  }

}
