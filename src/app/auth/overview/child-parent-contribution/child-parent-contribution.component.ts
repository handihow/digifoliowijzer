import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../user.state.model';
import Settings from '../../settings';
import MoscowColumnTitle from '../../moscow.title.model';
import Row from '../../moscow.row.model';
import { get } from 'lodash';
import { faChild, faChalkboardTeacher, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-child-parent-contribution',
  templateUrl: './child-parent-contribution.component.html',
  styleUrls: ['./child-parent-contribution.component.css']
})
export class ChildParentContributionComponent implements OnInit {

  columns: MoscowColumnTitle[] = Settings.standardTitles;
  rows: Row[] = Settings.ageRows;
  faChild = faChild;
  faMale = faMale;
  faFemale = faFemale;
  faChalkboardTeacher = faChalkboardTeacher;
  @Input() pdfPreview: boolean = false;

  @Input() userState: UserState | undefined;

  constructor() { }

  ngOnInit(): void {

  }

  hasContribution(contributionType: string, portfolioType: string, age: string): boolean{
    if(this.userState){
      return get(this.userState, [contributionType, portfolioType, age]) as boolean;
    } else {
      return false;
    }
  }

}
