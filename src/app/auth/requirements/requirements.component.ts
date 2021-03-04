import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { UserState } from '../user.state.model';
import { Subscription } from 'rxjs';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit, OnDestroy {

  faQuestion = faQuestionCircle;
  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  showMoscowInfoModal: boolean = false;

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
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }

  toggleMoscowInfoModal(){
    this.showMoscowInfoModal = !this.showMoscowInfoModal;
  }

}
