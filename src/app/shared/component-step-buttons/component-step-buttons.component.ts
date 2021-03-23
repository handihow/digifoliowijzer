import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { UserState } from '../../auth/user.state.model';

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
  @Input() isBackButtonHidden: boolean = false;
  @Input() isLastStep: boolean = false;
  @Input() nextComponentRouterLink: string = '';
  @Input() toNextComponentButtonText: string = '';

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
    if(!this.userState){ return };
    this.authService.updateUserStateComponentStep(this.userState.id, this.step + increase);
  }

  async onLastStep(){
    if(!this.userState){ return };
    if(this.nextComponentRouterLink === '/auth/overview'){
      await this.authService.setUserStateToFinished(this.userState.id);
    }
    this.authService.updateUserStateComponent(this.userState.id,this.nextComponentRouterLink);
  }
}
