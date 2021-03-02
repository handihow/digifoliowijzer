import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import MoscowColumnTitle from '../moscow.title.model';

@Component({
  selector: 'app-moscow-title-columns',
  templateUrl: './moscow-title-columns.component.html',
  styleUrls: ['./moscow-title-columns.component.css']
})
export class MoscowTitleColumnsComponent implements OnInit {

  faInfo = faInfo;
  @Input() titles: MoscowColumnTitle[] = [];
  @Output() toggleModal: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModal(index: number){
    this.toggleModal.emit(index);
  }

}
