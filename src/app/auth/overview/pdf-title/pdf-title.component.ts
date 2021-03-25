import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-title',
  templateUrl: './pdf-title.component.html',
  styleUrls: ['./pdf-title.component.css']
})
export class PdfTitleComponent implements OnInit {

  @Input() title: string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
