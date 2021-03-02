import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { UserState } from '../user.state.model';

@Component({
  selector: 'app-component-step-buttons',
  templateUrl: './component-step-buttons.component.html',
  styleUrls: ['./component-step-buttons.component.css']
})
export class ComponentStepButtonsComponent implements OnInit, OnDestroy {

  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  step: number = 1;
  @Input() buttonColorClass: string = '';
  @Input() isLastStep: boolean = false;

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

  setStep(increase: number){
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, this.step + increase);
    }
  }
}
