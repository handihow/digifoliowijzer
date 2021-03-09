import { Component, Input, OnInit } from '@angular/core';
import { MoSCoWRequirement, UserState } from '../../user.state.model';
import Row from '../../moscow.row.model';
import { get } from 'lodash';
import Settings from '../../settings';

interface RequirementItem {
  requirement: MoSCoWRequirement[];
  tableHeader: string;
  cssClass: string;
}

@Component({
  selector: 'app-additional-requirements',
  templateUrl: './additional-requirements.component.html',
  styleUrls: ['./additional-requirements.component.css']
})
export class AdditionalRequirementsComponent implements OnInit {

  @Input() userState: UserState | undefined;
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
  constructor() { }

  ngOnInit(): void {
    if(this.userState && this.userState.hasAdvancedUI){
      this.additionalRequirementItems = [this.must, this.should, this.could, this.wont];
    } else {
      this.additionalRequirementItems = [this.must, this.shouldorcould, this.wont];
    }
    this.additionalRequirementItems.forEach((requirement) => {
      const filteredRows = Settings.additionalRequirementRows
        .filter(this.filterAdditionalRequirements.bind(this, requirement.requirement));
      this.additionalRequirements.push(filteredRows);
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


}
