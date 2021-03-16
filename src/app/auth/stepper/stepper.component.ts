import { Component, Input } from '@angular/core';

interface StepItem {
  title: string;
  step: number;
  routerLink: string;
  color: string;
}

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent {

  stepItems: StepItem[] = [
    {
      title: "Achtergrond",
      step: 1,
      routerLink: "/auth/information",
      color: "is-warning"
    },
    {
      title: "Onderzoeken en verdiepen",
      step: 2,
      routerLink: "/auth/choices",
      color: "is-info"
    },
    {
      title: "Set van eisen",
      step: 3,
      routerLink: "/auth/requirements",
      color: "is-primary"
    },
    {
      title: "Overzicht en rapport",
      step: 4,
      routerLink: "/auth/overview",
      color: "is-success"
    },

  ]

  @Input() step: number = 1;

  constructor() {
  }




}
