import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { UserState } from '../models/user.state.model';

interface InformationItem {
  title: string;
  highlightedText: string;
  html: string;
  image: string;
  step: number;
}

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit, OnDestroy {
  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  informationItems: InformationItem[] = [
    {
      title: 'Digifoliowijzer',
      highlightedText:
        "De digifoliowijzer is één van de opbrengsten van <a href='https://www.samenslimmerpo.nl/innovatievragen/hoe-kunnen-we-de-brede-ontwikkeling-van-leerlingen-monitoren-en-zichtbaar-maken' target=_blank>de innovatievraag van LEV-WN</a>.",
      html: `
      <p>De digifoliowijzer is een webapp die je in enkele stappen tot een duidelijke ‘vraag’ richting ‘aanbod’ brengt.
      Ook voorzien we je daarbij van handvatten en ondersteunende materialen bij het verdiepen van je kennis,
      organiseren van teamsessies en bepalen van de visie op school rondom digitale portfolio’s.</p>
      `,
      image:
        "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/pins_met%20logo's-01.png?alt=media&token=a6e7335c-244e-43d5-a25a-3d7dd8647378",
      step: 1,
    },
    {
      title: 'Per stap wijzer',
      highlightedText: '',
      html: `
      <p>Je bent nu bij de <strong>eerste stap</strong>, waarbij je meer <strong>context</strong> krijgt bij inhoud van de
      <span class='is-italic'>digifoliowijzer</span> en de achtergrond van de vraag die hiertoe heeft geleid.</p>
      <p>Bij <strong>stap 2</strong> vind je theoretische kaders, een aan te passen <strong>presentatie</strong>
      voor bijeenkomsten en de <strong>toolkit</strong> <span class='is-italic'>Verkenning Digitale Portfolio’s</span>
      van Kennisnet die je kunt downloaden en gebruiken bij het bepalen van visie en focus. Met een
      <strong>marktoverzicht</strong> van aanbieders geven we je tot slot beeld en een eerste indruk van partijen
      (met als doelgroep o.a. PO) welke je met jouw opbrengsten uit deze tool zou kunnen benaderen.</p>
      <p>Na het beantwoorden van <strong>cruciale vragen en dilemma’s bij stap 3</strong> krijg je bij
      <strong>stap 4</strong> een duidelijk overzicht in de gewenste accenten op je school.
      Dit overzicht is te printen of als bestand op te slaan en te bewerken.</p>
      <p>Hiermee kun je met jouw schoolspecifieke vragen helder en overzichtelijk richting aanbieders
      communiceren: ‘met vraag naar aanbod’!</p>
      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_pennendoos.png?alt=media&token=8f7a99b1-8e1b-4baa-b6fb-eb58a4d09177',
      step: 2,
    },
    {
      title: 'Innovatievraag',
      highlightedText:
        'Hoe kunnen we de brede ontwikkeling van leerlingen monitoren en zichtbaar maken, zodat kind, ouders en leraar eigenaar worden van het leerproces?',
      html: `
      <p>Vereniging LEV-WN wil de brede ontwikkeling van kinderen beter monitoren en zichtbaar te maken.
      Het traditionele rapport - met cijfers en letters voor cognitieve en sociaal-emotionele ontwikkeling -
      sluit onvoldoende aan bij deze ambitie. Een digitaal portfolio biedt meer inzicht en zorgt voor eigenaarschap
      bij leerlingen en ouders.</p>
      <p>Wat zijn de mogelijkheden? En hoe pak je dit veranderproces aan?</p>
      <p>Bekijk de <a href='https://www.samenslimmerpo.nl/innovatievragen' target=_blank>innovatievragen</a>
      op de website van de PO-raad.</p>
      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_puntenslijper.png?alt=media&token=0d0e67c4-f346-4c3e-b252-ab2ab691187f',
      step: 3,
    },
    {
      title: 'Achtergrond',
      highlightedText: '',
      html: `
      <h6 class='title is-6'>Resultaat</h6>
      <p>Vanuit de wens om de brede ontwikkeling van leerlingen beter te monitoren en zichtbaar maken,
      ging basisschool Het Christal op zoek naar een digitaal portfolio als monitor- en rapportagemiddel.
      Met behulp van de toolkit Verkenning Digitaal Portfolio van Kennisnet, aangevuld met eigen onderzoek
      en stappen, kwam het team tot een scherpe vraagstelling en bijbehorende set van eisen voor het digitaal
      portfolio. Het proces dat het projectteam heeft doorlopen is vertaald naar praktische stappen in een
      keuzehulp die andere scholen kunnen helpt bij hun zoektocht naar een passend digitaal portfolio.</p>
      <h6 class='title is-6'>Tips</h6>
      <p>Zelf aan de slag of op zoek naar de eerste stap bij het werken met (digitale) portfolio’s?
      Hier zijn enkele tips:</p>
      <ul>
      <li>Ga op zoek naar de ‘vraag achter de vraag’ voordat je je verliest in het aanbod van digitale
      portfolio’s. Stel eerst vast waarom je een digitaal portfolio wil en hoe dit kan bijdragen aan de
      ambities van de school.</li>
      <li>Maak gebruik van de <span class='is-italic'>digifoliowijzer</span> om de ontwerpeisen voor een digitaal portfolio scherp te krijgen.</li>
      <li>Laat de implementatie van een digitaal portfolio hand in hand gaan met een andere manier van werken.
      Het moet meer zijn dan iets wat twee keer per jaar uit de kast getrokken wordt, zorg dat het portfolio
      leeft bij leraren, leerlingen en ouders.</li>
      </ul>
      <p>Wil je sparren over dit onderwerp? Neem dan contact op met Vincent Verkuil, directeur op basisschool
      Het Christal. Je kunt Vincent mailen op <a href="mailto:v.verkuil@levwn.nl">v.verkuil@levwn.nl</a>.</p>

      `,
      image:
        'https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_rugtas.png?alt=media&token=9a066842-d69a-42ba-9ad9-8155f8fc2f75',
      step: 4,
    },
  ];
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe((state) => {
      if (state.id.length === 0) return;
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
    if (!this.informationItems[this.step - 1]) return;
    return this.informationItems[this.step - 1].image;
  }

  getHTML() {
    if (!this.informationItems[this.step - 1]) return '';
    return this.informationItems[this.step - 1].html;
  }

  getHighlightedText() {
    if (!this.informationItems[this.step - 1]) return '';
    return this.informationItems[this.step - 1].highlightedText;
  }

  setStep(step: number) {
    if (this.userState) {
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }
}
