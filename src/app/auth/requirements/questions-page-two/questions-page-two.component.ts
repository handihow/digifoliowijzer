import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Row from '../../moscow.row.model';
import { UserState } from '../../user.state.model';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { get, set } from 'lodash';
import Settings from '../../settings';

@Component({
  selector: 'app-questions-page-two',
  templateUrl: './questions-page-two.component.html',
  styleUrls: ['./questions-page-two.component.css']
})
export class QuestionsPageTwoComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  rows: Row[] = [];
  @Input() property: string = 'portfolioType'
  @Input() userState: UserState | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.rows = Settings.ageRows;
  }

  getValue(age: string){
    if(!this.hasAgeGroup(age)){
      return 0;
    } else if(this.userState){
      return get(this.userState, [this.property, age]);
    } else {
      return 0;
    }
  }

  setValue(newValue: any, age: string){
    if(this.userState){
      set(this.userState, [this.property, age], newValue.target.value);
      this.authService.updateUserState(this.userState);
    }
  }

  hasAgeGroup(ageGroup: string){
    return get(this.userState, ['ageGroupIsAvailable', ageGroup])
  }

}
