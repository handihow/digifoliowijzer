import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  authObserver: Subscription| undefined;
  constructor(private authService: AuthService) {
  }

  ngOnInit(){
    this.authObserver = this.authService.observeAuthState().subscribe(user => {
      if (user) {
        this.authService.setUser(user);
      } else {
        this.authService.unsetUser();
      }
    });

  }

  ngOnDestroy(){
    if(this.authObserver){
      this.authObserver.unsubscribe();
    }
  }

}
