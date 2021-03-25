import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import TableColumnTitle from '../../../models/table.title.model';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-table-title-column',
  templateUrl: './table-title-column.component.html',
  styleUrls: ['./table-title-column.component.css']
})
export class TableTitleColumnComponent implements OnInit {

  faInfo = faInfo;
  @Input() title: TableColumnTitle | undefined;
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
