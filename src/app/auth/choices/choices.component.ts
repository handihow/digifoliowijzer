import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { UserState } from '../user.state.model';

interface ChoiceLink {
  href: string;
  image: string;
  alt: string;
  title: string;
}

interface ChoiceItem {
  menuTitle: string;
  title: string;
  links: ChoiceLink[];
  html: string;
  image: string;
  step: number;
}

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css']
})
export class ChoicesComponent implements OnInit, OnDestroy {
  choiceItems : ChoiceItem[] = [
    {
      menuTitle: 'Reflectie',
      title: 'Reflectie van Vincent',
      links: [],
      html: `
      <p>Hier komt een actuele reflectie van Vincent, als inleiding op de hierna gepresenteerde opbrengsten,
          vertaald naar een generiek stappenplan.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id blanditiis quo numquam culpa incidunt
          excepturi,
          eveniet eligendi expedita consequuntur libero ab, dignissimos repellat accusantium nobis? Fugit, et
          voluptas! Officiis, eaque.
      </p>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id blanditiis quo numquam culpa incidunt
          excepturi,
          eveniet eligendi expedita consequuntur libero ab, dignissimos repellat accusantium nobis? Fugit, et
          voluptas! Officiis, eaque.
      </p>
      `,
      image: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_lamp.png?alt=media&token=9010b0ea-639d-40a9-9010-40d1a6ffbc7f',
      step: 1
    },
    {
      menuTitle: 'Fase 1',
      title: 'Het komen tot goede vragen',
      links: [
        {
          title: 'Toolkit Kennisnet',
          href: 'https://www.kennisnet.nl/app/uploads/kennisnet/publicatie/Kennisnet-Handleiding-toolkit-digitaal-portfolio.pdf',
          alt: 'Toolkit Verkenning Digitaal Portfolio',
          image: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Toolkit%20Verkenning%20Digitaal%20Portfolio.png?alt=media&token=42771941-39e6-4a76-b665-f08be0b02287'
        }
      ],
      html: `
      <ol>
          <li>Welke leer- en ontwikkelingsdoelen streeft de school na? </li>
          <li>Aan welke criteria dient het leren van de kinderen te voldoen om de opgestelde leer- en
              ontwikkelingsdoelen te behalen? </li>
          <li>Volgens welke structuur dient het kindgericht portfolio ingericht te worden?
              Welke opbouw en (doorgaande) lijn wil de school hierin voor het jonge tot oude kind
              zien?</li>
          <li>Op welke manier dient het kindgericht portfolio vormgegeven te worden?
              Welke opbouw en (doorgaande) lijn wil de school hierin voor het jonge tot oude kind
              zien?</li>
          <li>In welke mate en voor welke domeinen/vakken vindt de integratie/positie van het
              portfolio t.o.v. het
              schoolcurriculum plaats?
              Welke opbouw en (doorgaande) lijn wil de school hierin voor het jonge tot oude kind
              zien?</li>
      </ol>
      `,
      image: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_docs.png?alt=media&token=10e2ec47-dce5-4bf8-acfe-36a92b0a9a7a',
      step: 2
    },
    {
      menuTitle: 'Fase 2',
      title: 'Het maken van keuzes als team',
      links: [],
      html: `
      <p>Met behulp van de vastgestelde ontwerpeisen worden materialen in fase twee aan de hand van de volgende deelvragen getest en beoordeeld.
      </p>
      <ul>
          <li>Hoe ziet het ontwerp voor het kindgericht portfolio eruit? </li>
          <li>In hoeverre voldoet het ontwerp aan de ontwerpeisen? </li>
          <li>In hoeverre voldoet het ontwerp in de praktijk? </li>
          <li>Op welke wijze moet het ontwerp na het testen worden aangepast? </li>
      </ul>
      `,
      image: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_pins.png?alt=media&token=f24164ab-b743-4271-900e-99c42c673a18',
      step: 3
    }
  ];
  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe(state => {
      if(state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
    });
  }

  ngOnDestroy(): void {
    if(this.stateSub){
      this.stateSub.unsubscribe();
    }
  }

  getImage(){
    return this.choiceItems[this.step - 1].image;
  }

  getHTML(){
    return this.choiceItems[this.step - 1].html;
  }

  getTitle(){
    return this.choiceItems[this.step - 1].title;
  }

  getLinks(){
    return this.choiceItems[this.step - 1].links;
  }

  setStep(step: number){
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }

}
