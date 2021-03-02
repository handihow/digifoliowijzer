import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Row from '../../moscow.row.model';
import { PortfolioType, UserState } from '../../user.state.model';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { get, set } from 'lodash';

@Component({
  selector: 'app-questions-page-two',
  templateUrl: './questions-page-two.component.html',
  styleUrls: ['./questions-page-two.component.css']
})
export class QuestionsPageTwoComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  rows: Row[] = [];
  property: string = 'portfolioType'

  @Input() userState: UserState | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.rows = this.authService.getRows()
  }

  getValue(age: string){
    if(this.userState){
      return get(this.userState, [this.property, age]) as PortfolioType;
    } else {
      return PortfolioType.DIGITAL;
    }
  }

  setValue(newValue: any, age: string){
    if(this.userState){
      set(this.userState, [this.property, age], newValue.target.value);
      this.authService.updateUserState(this.userState);
    }
  }

}
