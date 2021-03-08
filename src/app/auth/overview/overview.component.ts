import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { MoSCoWRequirement, UserState } from '../user.state.model';
import Row from '../moscow.row.model';
import { get } from 'lodash';

interface RequirementItem {
  requirement: MoSCoWRequirement[];
  tableHeader: string;
  cssClass: string;
}

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
  additionalRequirements: Row[][] = [];
  must: RequirementItem = {
    requirement: [MoSCoWRequirement.MUST],
    tableHeader: 'Must haves',
    cssClass: "has-background-success"
  };
  should: RequirementItem = {
    requirement: [MoSCoWRequirement.SHOULD],
    tableHeader: 'Should haves',
    cssClass: "has-background-link"
  };
  could: RequirementItem = {
    requirement: [MoSCoWRequirement.COULD],
    tableHeader: 'Could haves',
    cssClass: "has-background-info"
  };
  wont: RequirementItem = {
    requirement: [MoSCoWRequirement.WONT],
    tableHeader: 'Won\'t haves',
    cssClass: "has-background-warning"
  }
  shouldorcould: RequirementItem = {
    requirement: [MoSCoWRequirement.SHOULD,MoSCoWRequirement.COULD],
    tableHeader: 'Should/could haves',
    cssClass: "has-background-info"
  };

  additionalRequirementItems : RequirementItem[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe((state) => {
      if (state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
      if(this.userState.hasAdvancedUI){
        this.additionalRequirementItems = [this.must, this.should, this.could, this.wont];
      } else {
        this.additionalRequirementItems = [this.must, this.shouldorcould, this.wont];
      }
      this.additionalRequirementItems.forEach((requirement) => {
        const filteredRows = this.authService
          .getAdditionalRequirementRows()
          .filter(this.filterAdditionalRequirements.bind(this, requirement.requirement));
        this.additionalRequirements.push(filteredRows);
      });
    });
  }

  filterAdditionalRequirements(value: MoSCoWRequirement[], requirement: Row) {
    if (this.userState) {
      const actualValue = get(this.userState, [
        'additionalRequirements',
        requirement.property,
      ]) as MoSCoWRequirement;
      if (value.includes(actualValue)) {
        return true;
      }
      return false;
    }
    return false;
  }

  setStep(step: number){
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }
}
