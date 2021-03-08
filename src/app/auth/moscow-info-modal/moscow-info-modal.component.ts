import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-moscow-info-modal',
  templateUrl: './moscow-info-modal.component.html',
  styleUrls: ['./moscow-info-modal.component.css']
})
export class MoscowInfoModalComponent implements OnInit {

  @Input() showModal: boolean = false;
  @Input() hasAdvancedUI: boolean = false;
  @Output() closedModal: EventEmitter<boolean> = new EventEmitter(false);
  @Output() advancedUI: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { }

  ngOnInit(): void {
  }

  onClose(){
    this.closedModal.emit(true);
  }

  toggleAdvancedUI(){
    this.advancedUI.emit(!this.hasAdvancedUI);
  }

}
