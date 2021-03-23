import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../auth.service';
import { UserState } from '../user.state.model';

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
      highlightedText: "De digifoliowijzer is één van de opbrengsten van <a href='https://www.samenslimmerpo.nl/innovatievragen/hoe-kunnen-we-de-brede-ontwikkeling-van-leerlingen-monitoren-en-zichtbaar-maken' target=_blank>de innovatievraag vam LEV-WN</a>.",
      html: `
      <p>De digifoliowijzer is een webapp die je in enkele stappen tot een duidelijke ‘vraag’ richting ‘aanbod’ brengt.
      Ook voorzien we je daarbij van handvatten en ondersteunende materialen bij het verdiepen van je kennis,
      organiseren van teamsessies en bepalen van de visie op school rondom digitale portfolio’s.</p>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/pins_met%20logo's-01.png?alt=media&token=a6e7335c-244e-43d5-a25a-3d7dd8647378",
      step: 1,
    },
    {
      title: 'Per stap wijzer',
      highlightedText:
        '',
      html: `
      <p>Je bent nu bij de ‘eerste stap’, waarbij je meer context krijgt bij inhoud van de digifoliowijzer en de achtergrond van de vraag die hiertoe heeft geleid.</p>
      <p>Bij stap: <strong>‘2. Onderzoeken en verdiepen’</strong> vind je theoretische kaders, die als fundament voor deze
      innovatievraag hebben gediend. Deze gaven het team inhoudelijk houvast en verdiepten het gesprek over
      wat paste bij de school. Ook vind je hier een download met ‘presentatiekaarten’ (kant-en-klare PowerPoint)
      met een aantal van die inhoudelijke kaders om te gebruiken bij teamsessies en beeldvorming.
      Krachtig is ook de toolkit ‘Verkenning Digitale Portfolio’s’ van Kennisnet die je kunt downloaden en
      gebruiken bij het bepalen van visie en focus. Met een marktoverzichten van aanbieders (PO) geven we je
      tot slot grip en een eerste indruk van partijen welke je met jouw opbrengsten uit deze tool zou kunnen
      benaderen. Genoeg ingrediënten voor een verrijkende stap bij jullie schoolproces!</p>
      <p>Na het beantwoorden van cruciale vragen en dilemma’s bij stap <strong>‘3. Set van eisen’</strong>
      krijg je bij <strong>‘4. Overzicht en rapport’</strong> een duidelijk overzicht in de gewenste accenten op je school.
      Dit overzicht is te printen of als bestand op te slaan en te bewerken.</p>
      <p>Hiermee kun je met jouw schoolspecifieke vragen helder en overzichtelijk richting aanbieders communiceren:
      <span class='is-italic'>‘met vraag naar aanbod’!</span></p>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_pennendoos.png?alt=media&token=8f7a99b1-8e1b-4baa-b6fb-eb58a4d09177",
      step: 2,
    },
    {
      title: 'Innovatievraag',
      highlightedText: 'Hoe kunnen we de brede ontwikkeling van leerlingen monitoren en zichtbaar maken, zodat kind, ouders en leraar eigenaar worden van het leerproces?',
      html: `
      <p>Vereniging LEV-WN wil de brede ontwikkeling van kinderen beter monitoren en zichtbaar te maken.
      Het traditionele rapport - met cijfers en letters voor cognitieve en sociaal-emotionele ontwikkeling -
      sluit onvoldoende aan bij deze ambitie. Een digitaal portfolio biedt meer inzicht en zorgt voor eigenaarschap
      bij leerlingen en ouders.</p>
      <p>Wat zijn de mogelijkheden? En hoe pak je dit veranderproces aan?</p>
      <p>Bekijk de <a href='https://www.samenslimmerpo.nl/innovatievragen' target=_blank>innovatievragen</a>
      op de website van de PO-raad.</p>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_puntenslijper.png?alt=media&token=0d0e67c4-f346-4c3e-b252-ab2ab691187f",
      step: 3,
    },
    {
      title: 'Achtergrond',
      highlightedText: 'Interview met Vincent',
      html: `
      <ul>
          <li><strong>draagvlak verkrijgen</strong> onder leraren en ouders voor het gaan werken met een
              andere monitoring- en rapportagetool</li>
          <li>opstellen van een <strong>gedegen proces en onderzoek</strong> (bijeenkomsten, interviews,
              vragenlijsten, literatuurstudies etc.) die leiden tot het kunnen kiezen voor het best
              passende digitale portfolio </li>
          <li><strong>deelbare opbrengsten</strong> voor andere scholen en besturen, waaronder
              bijvoorbeeld een kijkwijzer digitale portfolio’s en een marktonderzoek naar de beschikbare
              producten, inclusief overzicht van kosten, overeenkomsten en verschillen
          </li>
      </ul>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_rugtas.png?alt=media&token=9a066842-d69a-42ba-9ad9-8155f8fc2f75",
      step: 4,
    }
  ];
  constructor(private authService: AuthService) {}

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
    if(!this.informationItems[this.step -1]) return;
    return this.informationItems[this.step - 1].image;
  }

  getHTML(){
    if(!this.informationItems[this.step -1]) return '';
    return this.informationItems[this.step - 1].html;
  }

  getHighlightedText(){
    if(!this.informationItems[this.step -1]) return '';
    return this.informationItems[this.step - 1].highlightedText;
  }

  setStep(step: number){
    if(this.userState){
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }
}
