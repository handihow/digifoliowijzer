import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import MoscowColumnTitle from '../moscow.title.model';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-moscow-title-column',
  templateUrl: './moscow-title-column.component.html',
  styleUrls: ['./moscow-title-column.component.css']
})
export class MoscowTitleColumnComponent implements OnInit {

  faInfo = faInfo;
  @Input() title: MoscowColumnTitle | undefined;
  @Input() index: number = 0;
  @Input() hideSubtitles: boolean = false;
  @Input() removeTitleClass: boolean = false
  @Input() hideInfoButton: boolean = false;
  @Output() toggleModal: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModal(){
    this.toggleModal.emit(this.index);
  }

}
