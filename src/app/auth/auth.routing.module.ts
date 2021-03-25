import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticatedComponent } from './auth.component';

import { redirectUnauthorizedTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);

const routes: Routes = [
  {
    path: '',
    component: AuthenticatedComponent,
    children: [
      {
        path: 'information',
        loadChildren: () => import('../information/information.module').then(m => m.InformationModule),
        ...canActivate(redirectUnauthorizedToLogin),
      },
      {
        path: 'choices',
        loadChildren: () => import('../choices/choices.module').then(m => m.ChoicesModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'requirements',
        loadChildren: () => import('../requirements/requirements.module').then(m => m.RequirementsModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: 'overview',
        loadChildren: () => import('../overview/overview.module').then(m => m.OverviewModule),
        ...canActivate(redirectUnauthorizedToLogin)
      },
      {
        path: '',
        redirectTo: '/auth/information',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
