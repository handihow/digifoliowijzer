import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard, redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

import { HomeComponent } from './home/home.component';
import { InformationComponent } from './auth/information/information.component';
import { ChoicesComponent } from './auth/choices/choices.component';
import { RequirementsComponent } from './auth/requirements/requirements.component';
import { OverviewComponent } from './auth/overview/overview.component';


const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
	{ 
		path: '',
		pathMatch: 'full',
		redirectTo: 'login',
	},
	{ 
		path: 'login', 
		component: HomeComponent
	},
	{ 
		path: 'auth', 
		redirectTo: 'auth/information', 
		pathMatch: 'full'
	},
	{ 
		path: 'auth/information', 
		component: InformationComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{ 
		path: 'auth/choices', 
		component: ChoicesComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{ 
		path: 'auth/requirements', 
		component: RequirementsComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{ 
		path: 'auth/overview', 
		component: OverviewComponent,
		...canActivate(redirectUnauthorizedToLogin)
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
