import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserState } from '../models/user.state.model';

interface ChoiceLink {
  title: string;
  href: string;
  image?: string;
  alt?: string;
}

interface ChoiceModal {
  image: string;
  title: string;
  links: ChoiceLink[];
  additionalInfo?: string;
}

interface ChoiceItem {
  title: string;
  modals: ChoiceModal[];
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
      modals: [],
      links: [],
      html: `
      <p>Je vindt hier verschillende downloads om te gebruiken bij het inrichten van je proces op school, verdeeld over twee kopjes.</p>
      <h6 class='title is-6'>Visievorming</h6>
      <p>Bij dit kopje vind je:</p>
      <div class='content'>
        <ol>
          <li>De toolkit ‘Verkenning Digitale Portfolio’s’, daarmee breng je in kaart hoe op school leerlingen worden begeleid in hun leerproces, en op welke momenten een digitaal portfolio hierin kan ondersteunen.</li>
          <li>Theoretische kaders, deze kunnen jou en je team inhoudelijke kennis & verdieping bieden rondom (digitale) portfolio’s.</li>
          <li>'Presentatiekaarten’, die je kunt aanpassen en gebruiken bij teamsessies en gezamenlijke beeldvorming rondom (digitale) portfolio’s.</li>
        </ol>
      </div>
      <h6 class='title is-6'>Marktverkenning</h6>
      <p>Bij dit kopje vind je een marktverkenning van aanbieders waarbij we je een eerste indruk en grip geven van partijen welke je met jouw opbrengsten uit deze tool zou kunnen benaderen. Zij hebben hiervoor zelf tekst en uitleg aangeleverd, inclusief contactgegevens.</p>
      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_lamp.png?alt=media&token=9010b0ea-639d-40a9-9010-40d1a6ffbc7f',
      step: 1,
    },
    {
      title: 'Visievorming',
      modals: [
        {
          title: 'Toolkit | Kennisnet | Verkenning Digitaal Portfolio',
          image: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/kaartje%20toolkit.png?alt=media&token=bc9c57e5-58f7-4dfe-88bb-6c3452d5c04a',
          links: [
            {
              title: 'Handleiding van Toolkit | Kennisnet | Verkenning Digitaal Portfolio',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/1.%20Kennisnet-Handleiding-toolkit-digitaal-portfolio.pdf?alt=media&token=8c175e31-2382-4f04-8c8d-fb491cf22491'
            },
            {
              title: 'Toolkit stappenplan',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/2.%207437%20KEN%20Toolkit%20Stappenplan%20A4%20%5Bv6%5D.pdf?alt=media&token=35c0891d-11f1-461c-9d5b-754c6c276aa1'
            },
            {
              title: 'Toolkit lensformulier',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/3.%207437%20KEN%20Toolkit%20Lensformulier%20A2%20%5Bweb%5D.pdf?alt=media&token=8f19af17-da12-42e0-a490-c68879e779a2'
            },
            {
              title: 'Toolkit posters',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/4.%207437%20KEN%20Toolkit%20Posters%20A1%202x%20%5Bweb%5D.pdf?alt=media&token=8fdcc633-85f1-4368-a7db-965688d52ea4'
            },
            {
              title: 'Toolkit vragenkaarten',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/5.%207437%20KEN%20Toolkit%20Vragenkaarten%208x12%2027x%20%5Bweb%5D.pdf?alt=media&token=12b36ea8-a752-4f45-9bee-6f55a3c999ee'
            }
          ],
          additionalInfo: "Wil je graag een fysiek exemplaar ontvangen? Neem dan contact op met Kennisnet support via support@kennisnet.nl of op op 0800 321 22 33."
        },
        {
          title: 'Onderzoek & Verdieping | Digitale portfolio\'s',
          image: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/2.png?alt=media&token=b6824a52-5380-462f-92e6-01cc48335594',
          links: [
            {
              title: 'Blended portfolio | Theoretisch Kader',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/OV1.%20TheoretischkaderBlendedPortfolio-%20versnellingsvraag%20portfolio.pdf?alt=media&token=66a0e7c7-c0e9-460c-8ac9-b04c416d19d9'
            },
            {
              title: 'Reviewstudie naar de effectiviteit van het gebruik van e-portfolio\’s in het basisonderwijs',
              href: 'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/OV2.%20Reviewstudie-naar-de-effectiviteit-van-het-gebruik-van-e-portfolios-in-het-basisonderwijs.pdf?alt=media&token=1124a071-e4a6-4690-8212-74dc9e284a2e'
            }
          ]
        }
      ],
      links: [
        {
          title: 'Presentatiekaarten | Teamsessie',
          href:
            'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/PresentatiekaartenO21FINAL.pptx?alt=media&token=83f13163-c5a4-4dda-89d5-9840664a92af',
          alt: 'Presentatiekaarten | Teamsessie',
          image:
            'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/3.png?alt=media&token=a97b8e0f-4a02-4f21-aa3b-f432d7bc354b',
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
      modals:[],
      links: [
          {
          title: 'Overzicht marktpartijen | Excel',
          href:
            'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Marktverkenning.xlsx?alt=media&token=544ba2dd-6987-432d-a1fa-75e592dd6006',
          alt: 'Overzicht marktpartijen',
          image:
            'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/1.png?alt=media&token=97b287e0-e56b-4a78-9eec-b385bae5db9a',
        }
      ],
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
  showModal: boolean = false;
  modalLinks: ChoiceLink[] = [];
  additionalModalInformation: string = '';

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
    if(!this.choiceItems[this.step-1]) return;
    return this.choiceItems[this.step - 1].modals.length > 0 || this.choiceItems[this.step - 1].links.length > 0 || false;
  }

  getModals() {
    if (!this.choiceItems[this.step - 1]) return;
    return this.choiceItems[this.step - 1].modals;
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

  toggleModal() {
    this.showModal = !this.showModal;
    if(!this.showModal){
      this.modalLinks = [];
    }
  }

  setModalContent(index: number){
    this.modalLinks = this.choiceItems[this.step-1]?.modals[index]?.links || [];
    this.additionalModalInformation = this.choiceItems[this.step-1]?.modals[index]?.additionalInfo || '';
    this.toggleModal();
  }

}
