import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';
import {Subscription} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-authenticated',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthenticatedComponent implements OnInit {
  
  routerSub: Subscription;
  currentUrl: string = "/auth/information";
  controls: any = {
  	"/auth/information": {
  		step: 1,
  		title: "Informatie vooraf",
  		color: "is-warning",
  	},
  	"/auth/choices": {
  		step: 2,
  		title: "Keuzes maken",
  		color: "is-link"
  	},
  	"/auth/requirements": {
  		step: 3,
  		title: "Set van eisen",
  		color: "is-primary"
  	},
  	"/auth/overview": {
  		step: 4,
  		title: "Overzicht en rapport",
  		color: "is-success"
  	}
  }

  constructor(private router: Router, private authService: AuthService) { 
  	  this.routerSub = this.router.events.pipe(
	    	filter(event => event instanceof NavigationEnd)
		  ).subscribe(event => this.currentUrl = router.url);
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
  }

  ngOnDestroy(){
  	this.routerSub.unsubscribe();
  }

}