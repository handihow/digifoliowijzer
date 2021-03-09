import { Component, OnInit } from '@angular/core';
import { faFileExcel, faFilePdf } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;

  constructor() { }

  ngOnInit(): void {
  }

}
