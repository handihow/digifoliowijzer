import { Component, Input } from '@angular/core';
import { UserState } from './user.state.model';

@Component({
  selector: 'app-authenticated',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthenticatedComponent  {
  @Input() userState: UserState | undefined;
  @Input() currentUrl: string = '/auth/information';
  controls: any = {
    '/auth/information': {
      step: 1,
      title: 'Achtergrond',
      color: 'is-warning',
      previousPage: null,
      nextPage: '/auth/choices',
    },
    '/auth/choices': {
      step: 2,
      title: 'Onderzoeken en verdiepen',
      color: 'is-link',
      previousPage: 'auth/information',
      nextPage: '/auth/requirements',
    },
    '/auth/requirements': {
      step: 3,
      title: 'Set van eisen',
      subtitle: 'Fase 3 - opmaken van een set van eisen',
      color: 'is-primary',
      previousPage: '/auth/choices',
      nextPage: '/auth/overview',
    },
    '/auth/overview': {
      step: 4,
      title: 'Overzicht en rapport',
      color: 'is-success',
      previousPage: 'auth/requirements',
      nextPage: null,
    },
  };

  constructor() {}

}
