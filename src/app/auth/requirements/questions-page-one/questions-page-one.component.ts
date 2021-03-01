import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoSCoWRequirement, UserState } from '../../user.state.model';
import { get } from 'lodash';

interface Row {
  title: string;
  property: string;
}

@Component({
  selector: 'app-questions-page-one',
  templateUrl: './questions-page-one.component.html',
  styleUrls: ['./questions-page-one.component.css']
})
export class QuestionsPageOneComponent implements OnInit {

  @Input() userState: UserState | undefined;
  @Output() toStep: EventEmitter<number> = new EventEmitter();

  rows: Row[] = [
    {
      title: '4-6 jaar',
      property: 'fourToSix'
    },
    {
      title: '7-9 jaar',
      property: 'sevenToNine'
    },
    {
      title: '10-12 jaar',
      property: 'tenToTwelve'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  goToStep(step: number){
    this.toStep.emit(step);
  }

  getPortfolioRequirementValue(category: string, age: string) {
    return get(this.userState, ['portfolioRequirements', category, age]) as MoSCoWRequirement;
  }

}
