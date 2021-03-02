import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import Row from '../../moscow.row.model';
import { UserState } from '../../user.state.model';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-questions-page-two',
  templateUrl: './questions-page-two.component.html',
  styleUrls: ['./questions-page-two.component.css']
})
export class QuestionsPageTwoComponent implements OnInit {

  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  rows: Row[] = [];
  @Input() userState: UserState | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.rows = this.authService.getRows()
  }

}
