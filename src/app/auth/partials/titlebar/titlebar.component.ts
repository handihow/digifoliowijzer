import { Component, OnInit, Input } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-titlebar',
  templateUrl: './titlebar.component.html',
  styleUrls: ['./titlebar.component.css']
})
export class TitlebarComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  @Input() title: string | undefined;
  @Input() color: string | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
  	this.authService.logout();
  }


}
