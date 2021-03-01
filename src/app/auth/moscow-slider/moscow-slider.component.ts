import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MoSCoWRequirement } from '../user.state.model';

@Component({
  selector: 'app-moscow-slider',
  templateUrl: './moscow-slider.component.html',
  styleUrls: ['./moscow-slider.component.css']
})
export class MoscowSliderComponent implements OnInit {

  value: number = MoSCoWRequirement.WONT;
  compareValueWont: number = MoSCoWRequirement.WONT;
  compareValueCould: number = MoSCoWRequirement.COULD;
  compareValueMust: number = MoSCoWRequirement.MUST;
  @Input() initialValue: MoSCoWRequirement | undefined;
  @Output() changedValue: EventEmitter<MoSCoWRequirement> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if(this.initialValue !== undefined){
      this.value = this.initialValue;
    }
  }

  setValue(index: number){
    this.value = index;
  }

}
