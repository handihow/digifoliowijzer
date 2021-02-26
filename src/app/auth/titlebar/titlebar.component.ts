import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {
  
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() color: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  
}
