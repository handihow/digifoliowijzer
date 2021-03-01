import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserState } from '../user.state.model';
import firebase from 'firebase/app';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit, OnDestroy {

  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

    this.stateSub = this.authService.userState.subscribe(state => {
      if(state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
    });

  }

  ngOnDestroy(): void {
    if(this.stateSub){
      this.stateSub.unsubscribe();
    }
  }

  setStep(step: number){
    this.step = step;
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }

}
