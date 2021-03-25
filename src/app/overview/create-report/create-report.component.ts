import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;

  @Output() generatePdf: EventEmitter<boolean> = new EventEmitter();
  @Output() generateExcel: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onGeneratePdf(){
    this.generatePdf.emit(true);
  }

  onGenerateExcel(){
    this.generateExcel.emit(true);
  }

}
