import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-final-text',
  templateUrl: './final-text.component.html',
  styleUrls: ['./final-text.component.css']
})
export class FinalTextComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.logout();
  }

}
