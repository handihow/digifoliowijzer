import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../../services/auth.service';
import { UserState } from '../../../models/user.state.model';

import Settings  from '../../settings';
import AuthSection from '../../../models/auth.section.model';

@Component({
  selector: 'app-component-step-buttons',
  templateUrl: './component-step-buttons.component.html',
  styleUrls: ['./component-step-buttons.component.css']
})
export class ComponentStepButtonsComponent implements OnInit, OnDestroy {

  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  step: number = 1;
  sections: AuthSection[] = Settings.authSections;
  currentSection: AuthSection | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe(state => {
      if(state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
      this.currentSection = this.sections.find(s => s.currentPage === state.currentPage);
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
    if(!this.userState) return ;
    if(!this.currentSection) return;
    if(this.currentSection?.nextPage === '/auth/overview'){
      await this.authService.setUserStateToFinished(this.userState.id);
    }
    this.authService.updateUserStateComponent(this.userState.id,this.currentSection.nextPage);
  }
}
