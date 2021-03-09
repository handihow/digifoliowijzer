import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

import { InformationComponent } from './information/information.component';
import { ChoicesComponent } from './choices/choices.component';
import { RequirementsComponent } from './requirements/requirements.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
		path: 'information',
		component: InformationComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{
		path: 'choices',
		component: ChoicesComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{
		path: 'requirements',
		component: RequirementsComponent,
		...canActivate(redirectUnauthorizedToLogin)
	},
	{
		path: 'overview',
		loadChildren: () => import('./overview/overview.module').then(m => m.OverviewModule),
		...canActivate(redirectUnauthorizedToLogin)
	},
  {
		path: '',
		redirectTo: 'information',
		pathMatch: 'full'
	}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
