import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoSCoWRequirement } from '../user.state.model';

interface Requirement {
  value: MoSCoWRequirement;
  buttonText: string;
  cssClass: string;
  tooltip: string;
}

@Component({
  selector: 'app-moscow-buttons',
  templateUrl: './moscow-buttons.component.html',
  styleUrls: ['./moscow-buttons.component.css']
})
export class MoscowButtonsComponent implements OnInit {

  value: number = MoSCoWRequirement.WONT;
  requirements: Requirement[] = [
    {
      value: MoSCoWRequirement.MUST,
      buttonText: 'M',
      cssClass: 'is-success',
      tooltip: 'M = must haves'
    },
    {
      value: MoSCoWRequirement.SHOULD,
      buttonText: 'S',
      cssClass: 'is-link',
      tooltip: 'S = should haves'
    },
    {
      value: MoSCoWRequirement.COULD,
      buttonText: 'C',
      cssClass: 'is-info',
      tooltip: 'C = chould haves'
    },
    {
      value: MoSCoWRequirement.WONT,
      buttonText: 'W',
      cssClass: 'is-warning',
      tooltip: 'W = won\'t haves'
    }
  ]
  @Input() initialValue: MoSCoWRequirement | undefined;
  @Output() changedValue: EventEmitter<MoSCoWRequirement> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.initialValue !== undefined){
      this.value = this.initialValue;
    }
  }

  setValue(index: MoSCoWRequirement){
    this.value = index;
    this.changedValue.emit(index)
  }

}
