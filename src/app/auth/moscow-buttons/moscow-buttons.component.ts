import { Component, EventEmitter, Input, OnInit, OnChanges, Output } from '@angular/core';
import { MoSCoWRequirement } from '../user.state.model';
import {
  faQuestion,
  faCheck,
  faMinus,
  IconDefinition,
} from '@fortawesome/free-solid-svg-icons';

interface Requirement {
  value: MoSCoWRequirement;
  buttonText: string;
  icon: IconDefinition;
  cssClass: string;
  tooltip: string;
  tooltipAdvanced: string;
}

@Component({
  selector: 'app-moscow-buttons',
  templateUrl: './moscow-buttons.component.html',
  styleUrls: ['./moscow-buttons.component.css'],
})
export class MoscowButtonsComponent implements OnInit, OnChanges {
  value: number = MoSCoWRequirement.WONT;
  must: Requirement = {
    value: MoSCoWRequirement.MUST,
    buttonText: 'M',
    icon: faCheck,
    cssClass: 'is-success',
    tooltip: 'must haves',
    tooltipAdvanced: 'must haves',
  }
  should: Requirement = {
    value: MoSCoWRequirement.SHOULD,
    buttonText: 'S',
    icon: faQuestion,
    cssClass: 'is-link',
    tooltip: 'should haves',
    tooltipAdvanced: 'should haves',
  };
  could: Requirement = {
    value: MoSCoWRequirement.COULD,
    buttonText: 'C',
    icon: faQuestion,
    cssClass: 'is-info',
    tooltip: 'should/could haves',
    tooltipAdvanced: 'chould haves',
  };
  wont: Requirement = {
    value: MoSCoWRequirement.WONT,
    buttonText: 'W',
    icon: faMinus,
    cssClass: 'is-warning',
    tooltip: "won't haves",
    tooltipAdvanced: "won't haves",
  };
  requirements: Requirement[] = [];
  @Input() hasAdvancedUI: boolean = false;
  @Input() buttonsDisabled: boolean = false;
  @Input() initialValue: MoSCoWRequirement | undefined;
  @Output() changedValue: EventEmitter<MoSCoWRequirement> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {

  }

  ngOnChanges(): void {
    if (this.hasAdvancedUI) {
      this.requirements = [this.must,this.should,this.could,this.wont];
    } else {
      this.requirements = [this.must,this.could,this.wont];
    }
    if (this.initialValue !== undefined) {
      this.value =
        !this.hasAdvancedUI && this.initialValue === MoSCoWRequirement.SHOULD
          ? MoSCoWRequirement.COULD
          : this.initialValue;
    }
  }

  setValue(index: MoSCoWRequirement) {
    this.value = index;
    this.changedValue.emit(index);
  }
}
