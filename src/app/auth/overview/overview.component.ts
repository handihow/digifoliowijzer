import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { UserState } from '../user.state.model';



@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  showMoscowInfoModal: boolean = false;
  overviewItems: string[] = ['Type portfolio','Bijdrage kind en ouders','Aanvullende eisen']

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe((state) => {
      if (state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
    });
  }

  setStep(step: number){
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }
}
