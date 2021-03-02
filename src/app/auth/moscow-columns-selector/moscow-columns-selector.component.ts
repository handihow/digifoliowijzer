import { Component, OnInit, Input } from '@angular/core';
import Row from '../moscow.row.model';
import { get, set } from 'lodash';
import { MoSCoWRequirement, UserState } from '../user.state.model';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-moscow-columns-selector',
  templateUrl: './moscow-columns-selector.component.html',
  styleUrls: ['./moscow-columns-selector.component.css']
})
export class MoscowColumnsSelectorComponent implements OnInit {

  @Input() userState: UserState | undefined;
  @Input() property: string | undefined;
  @Input() rows: Row[] | undefined;
  @Input() columns: string[] | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  getRequirementValue(category: string, age: string) {
    if(this.userState && this.property){
      return get(this.userState, [this.property, category, age]) as MoSCoWRequirement;
    } else {
      return MoSCoWRequirement.WONT;
    }
  }

  updateValue(newValue: MoSCoWRequirement, category: string, age: string){
    if(this.userState && this.property){
      set(this.userState, [this.property, category, age], newValue);
      this.authService.updateUserState(this.userState.id, this.userState);
    }
  }

}
