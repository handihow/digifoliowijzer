import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import TableColumnTitle from '../../../models/table.title.model';

@Component({
  selector: 'app-table-title-columns',
  templateUrl: './table-title-columns.component.html',
  styleUrls: ['./table-title-columns.component.css']
})
export class TableTitleColumnsComponent implements OnInit {

  faInfo = faInfo;
  @Input() titles: TableColumnTitle[] = [];
  @Output() toggleModal: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  openModal(index: number){
    this.toggleModal.emit(index);
  }

}
