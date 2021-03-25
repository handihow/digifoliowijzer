import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-requirements-information',
  templateUrl: './requirements-information.component.html',
  styleUrls: ['./requirements-information.component.css']
})
export class RequirementsInformationComponent implements OnInit {
  @Output() showMoscowInfoModal: EventEmitter<boolean> = new EventEmitter();
  @Output() toNextStep: EventEmitter<boolean> = new EventEmitter();
  @Output() openInfoModal: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {

  }

  onStart(){
    this.toNextStep.emit(true);
  }

  toggleMoscowInfoModal(){
    this.showMoscowInfoModal.emit(true);
  }

}
