import { Component, OnInit, Input } from '@angular/core';
import TableRow from '../../../../models/table.row.model';
import { get, set } from 'lodash';
import { MoSCoWRequirement, UserState } from '../../../../models/user.state.model';
import { AuthService } from 'src/app/services/auth.service';
import {
  faCheck,
  faMinus,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boolean-columns-selector',
  templateUrl: './boolean-columns-selector.component.html',
  styleUrls: ['./boolean-columns-selector.component.css']
})
export class BooleanColumnsSelectorComponent implements OnInit {

  check = faCheck;
  minus = faMinus;
  @Input() userState: UserState | undefined;
  @Input() property: string | undefined;
  @Input() rows: TableRow[] | undefined;
  @Input() columns: string[] | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getButtonsAreDisabled(category: string, age: string){
    if(!this.hasAgeGroup(age)){
      return true;
    } else {
      return false;
    }
  }

  getRequirementValue(category: string, age: string) {
    if(!this.hasAgeGroup(age)){
      return false;
    } else if(this.userState && this.property){
      const mustReturnFalse = get(this.userState, ['portfolioRequirements', category, age]) as MoSCoWRequirement === MoSCoWRequirement.WONT;
      return mustReturnFalse ? false : get(this.userState, [this.property, category, age]);
    } else {
      return false;
    }
  }

  updateValue(newValue: boolean, category: string, age: string){
    if(this.userState && this.property){
      set(this.userState, [this.property, category, age], newValue);
      this.authService.updateUserState(this.userState);
    }
  }

  hasAgeGroup(ageGroup: string){
    return get(this.userState, ['ageGroupIsAvailable', ageGroup])
  }

}

