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
  title: string;
  links: ChoiceLink[];
  html: string;
  image: string;
  step: number;
}

@Component({
  selector: 'app-choices',
  templateUrl: './choices.component.html',
  styleUrls: ['./choices.component.css'],
})
export class ChoicesComponent implements OnInit, OnDestroy {
  choiceItems: ChoiceItem[] = [
    {
      title: 'Inleiding',
      links: [],
      html: `
      <p>Bij ‘visievorming’ vind je theoretische kaders, die als fundament voor deze innovatievraag hebben gediend.
      Deze kunnen jou en je team inhoudelijke verdieping bieden.
      Ook vind je hier een download met ‘presentatiekaarten’ (kant-en-klare PowerPoint) met een aantal
      van die inhoudelijke kaders om te gebruiken bij teamsessies en beeldvorming.
      Krachtig is ook de toolkit ‘Verkenning Digitale Portfolio’s’ van Kennisnet die je kunt downloaden en
      gebruiken bij het bepalen van visie en focus. </p>
      <p>Bij ‘marktverkenning’ vind je een marktoverzichten van aanbieders (PO) waarbij we je tot slot
      grip geven en een eerste indruk van partijen welke je met jouw opbrengsten uit deze
      tool zou kunnen benaderen.</p>
      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_lamp.png?alt=media&token=9010b0ea-639d-40a9-9010-40d1a6ffbc7f',
      step: 1,
    },
    {
      title: 'Visievorming',
      links: [
        {
          title: 'Toolkit Kennisnet',
          href:
            'https://www.kennisnet.nl/app/uploads/kennisnet/publicatie/Kennisnet-Handleiding-toolkit-digitaal-portfolio.pdf',
          alt: 'Toolkit Verkenning Digitaal Portfolio',
          image:
            'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Toolkit%20Verkenning%20Digitaal%20Portfolio.png?alt=media&token=42771941-39e6-4a76-b665-f08be0b02287',
        },
      ],
      html: `
      <p>Met de gereedschappen op deze pagina kun je gezamenlijk tot een visie en begripsvorming komen.
      Deze elementen dragen bij aan twee belangrijke kernaspecten, namelijk:
      “Wat wil je bereiken?” en “Waarom wil je een digitaal portfolio?”</p>

      <p>Klik op één van de kaarten om de bijbehorende downloads te openen.</p>

      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_docs.png?alt=media&token=10e2ec47-dce5-4bf8-acfe-36a92b0a9a7a',
      step: 2,
    },
    {
      title: 'Marktverkenning',
      links: [],
      html: `
      <p>Hier kun je een overzicht downloaden met marktpartijen die digitale portfolio’s aanbieden. Deze kun je gebruiken voor je eerste oriëntatie en beeldvorming.
      Je zult het overzicht ook als ‘slotstuk’ willen gebruiken om naast je set van eisen te leggen en zo gericht de marktpartijen te kunnen bevragen.</p>

      <p>De informatie is door de marktpartijen zelf aangeleverd.</p>

      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_pins.png?alt=media&token=f24164ab-b743-4271-900e-99c42c673a18',
      step: 3,
    },
  ];
  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe((state) => {
      if (!state || state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
    });
  }

  ngOnDestroy(): void {
    if (this.stateSub) {
      this.stateSub.unsubscribe();
    }
  }

  getImage() {
    if (!this.choiceItems[this.step - 1]) return;
    return this.choiceItems[this.step - 1].image;
  }

  getHTML() {
    if (!this.choiceItems[this.step - 1]) return;
    return this.choiceItems[this.step - 1].html;
  }

  getTitle() {
    if (!this.choiceItems[this.step - 1]) return;
    return this.choiceItems[this.step - 1].title;
  }

  hasLinks() {
    return this.choiceItems[this.step - 1]!.links!.length > 0 || false;
  }

  getLinks() {
    if (!this.choiceItems[this.step - 1]) return;
    return this.choiceItems[this.step - 1].links;
  }

  setStep(step: number) {
    if (this.userState) {
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }
}
