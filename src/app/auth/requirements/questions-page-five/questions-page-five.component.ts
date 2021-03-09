import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';
import Row from '../../moscow.row.model';
import { MoSCoWRequirement, UserState } from '../../user.state.model';
import { get, set } from 'lodash';
import Settings from '../../settings';

@Component({
  selector: 'app-questions-page-five',
  templateUrl: './questions-page-five.component.html',
  styleUrls: ['./questions-page-five.component.css']
})
export class QuestionsPageFiveComponent implements OnInit {

  rows: Row[] = [];
  @Input() step: number = 6;
  @Input() property: string = 'additionalRequirements'
  @Input() userState: UserState | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.setRows();
  }

  ngOnChanges(): void {
    this.setRows();
  }

  setRows(){
    if(this.step === 6){
      this.rows = Settings.additionalRequirementRows.slice(0,3);
    } else if(this.step===7){
      this.rows = Settings.additionalRequirementRows.slice(3,6);
    } else {
      this.rows = Settings.additionalRequirementRows.slice(7);
    }
  }

  getValue(additionalRequirement: string){
    if(!this.userState) return MoSCoWRequirement.WONT;
    return get(this.userState, [this.property, additionalRequirement]) as MoSCoWRequirement;
  }

  setValue(newValue: any, additionalRequirement: string){
    if(!this.userState) return;
    set(this.userState, [this.property, additionalRequirement], newValue);
    this.authService.updateUserState(this.userState);
  }

  getTextValue(){
    if(!this.userState) return '';
    return get(this.userState, ['canBeUsedOnDevices']);
  }

  setTextValue(newValue: any){
    if(!this.userState) return;
    set(this.userState, ['canBeUsedOnDevices'], newValue.target.value);
    this.authService.updateUserState(this.userState);
  }
}
