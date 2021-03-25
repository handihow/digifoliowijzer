import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../../models/user.state.model';
import Settings from '../../settings';
import TableColumnTitle from '../../../models/table.title.model';
import TableRow from '../../../models/table.row.model';
import { get } from 'lodash';
import { faChild, faChalkboardTeacher, faMale, faFemale } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-child-parent-contribution',
  templateUrl: './child-parent-contribution.component.html',
  styleUrls: ['./child-parent-contribution.component.css']
})
export class ChildParentContributionComponent implements OnInit {

  columns: TableColumnTitle[] = Settings.standardTitles;
  rows: TableRow[] = Settings.ageRows;
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
    if(this.userState && this.hasAgeGroup(age)){
      return get(this.userState, [contributionType, portfolioType, age]) as boolean;
    }
    return false;
  }

  hasAgeGroup(ageGroup: string){
    return get(this.userState, ['ageGroupIsAvailable', ageGroup])
  }

}
