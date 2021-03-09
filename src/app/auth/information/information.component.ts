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
      title: 'Basis',
      highlightedText: '',
      html: `
      <p>Het Christal start vanuit de basis: door goed te kijken naar de huidige situatie en de
          <strong>visie</strong> op toetsen en leren.
          Daarnaast heeft de school veel aandacht voor het betrekken van <strong>leerlingen, leraren en
              ouders</strong> in het <strong>verbeterproces</strong>.
      </p>
      <p>De <strong>kennis en onderzoeken</strong> die al beschikbaar zijn, worden gebruikt in het
          onderzoek naar
          het <strong>best passende monitor- en rapportagemiddel</strong>.
          Ook kijkt Het Christal naar de <strong>product- en proceseisen</strong> en naar het
          besluitvormingsproces.
          Bij de innovatievraag/interventies wordt het <strong>netwerk</strong> van OICT’ers
          (onderwijskundig
          ICT’ers) en andere schoolleiders van LEV-WN volop betrokken.
          Deze onderwijsinhoudelijke netwerken zijn erg succesvol voor de samenwerking binnen de
          organisatie. </p>

      <p>LEV staat voor <strong>Liefde En Vertrouwen</strong> en de leus van het schoolbestuur is
          <strong>‘Geloof
              in ontwikkeling’</strong>.
          Dit past volgens projectleider Vincent Verkuil helemaal bij deze innovatievraag.
          “Als je christelijk bent, dan geloof je dat kinderen <strong>uniek</strong> zijn en gemaakt zijn
          met
          <strong>ieder een eigen talent</strong>.
          Ook zien wij het als onze taak hen te helpen om hun talenten te ontwikkelen.”
      </p>
      <p>Op de gevel van de school staat dan ook <strong>‘Groeien, geloven, stralen’</strong>.
          “Wij willen alle kinderen écht zien en we willen dat ze trots zijn op hun ontwikkelingen.
          Het nieuwe portfolio gaat ons helpen om de transitie te maken <strong>van leerstofgericht- naar
              kindgericht onderwijs</strong>.”
      </p>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/pins_met%20logo's-01.png?alt=media&token=a6e7335c-244e-43d5-a25a-3d7dd8647378",
      step: 1,
    },
    {
      title: 'Doel',
      highlightedText:
        'Hoe kunnen we de brede ontwikkeling van leerlingen monitoren en zichtbaar maken, zodat kind, ouders en leraar eigenaar worden van het leerproces?',
      html: `
      <p>Doel van de digifoliowijzer is de brede ontwikkeling van leerlingen beter te monitoren en zichtbaar te
      maken. Het traditionele rapport - met cijfers en letters voor cognitieve en sociaal-emotionele ontwikkeling -
      sluit onvoldoende aan bij deze ambitie. </p>
      <p>Een digitaal portfolio biedt meer inzicht en zorgt voor eigenaarschap bij leerlingen en ouders. </p>
      <p>Wat zijn de mogelijkheden? En hoe pak je dit veranderproces aan? </p>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_pennendoos.png?alt=media&token=8f7a99b1-8e1b-4baa-b6fb-eb58a4d09177",
      step: 2,
    },
    {
      title: 'Ambitie',
      highlightedText: '',
      html: `
      <p>Basisschool Het Christal, onderdeel van vereniging LEV-WN, werkt met traditionele
          <strong>rapporten</strong>.
          De leraar geeft leerlingen een beoordeling voor de cognitieve en sociaal emotionele
          ontwikkeling.
          De Cito scores gaan ook mee naar huis.
      </p>
      <p>Dit past niet bij de visie van de school en het bestuur op <strong>toekomstgericht
              onderwijs</strong>, waarbij de leerling, ouders en leraar eigenaar zijn van het leerproces.
          Bovendien heeft LEV-WN als ambitie om te werken met doorgaande leerlijnen en in betere
          <strong>samenwerking</strong> met voorschoolse opvang en middelbare scholen.
      </p>
      <p>Daarom wil Het Christal de brede ontwikkeling van leerlingen beter <strong>monitoren en zichtbaar
              maken</strong>.
          Werken met een <strong>digitaal portfolio</strong> als monitor- en rapportagemiddel zou hier
          goed bij passen.
          Het aanbod is echter enorm en er is behoefte aan meer kennis en expertise om tot goede
          <strong>functionele eisen </strong>voor een digitaal portfolio te komen.
      </p>
      <p>De vraag naar een ander digitaal monitor- en rapportagemiddel speelt ook voor andere scholen van
          LEV-WN en ook landelijk.
          De uitkomsten van de innovatievraag, waaronder mogelijk een kijkwijzer digitale portfolio’s,
          gaat Het Christal <strong>delen met de sector</strong>.
      </p>
      `,
      image: "https://firebasestorage.googleapis.com/v0/b/digifoliowijzer.appspot.com/o/Square_puntenslijper.png?alt=media&token=0d0e67c4-f346-4c3e-b252-ab2ab691187f",
      step: 3,
    },
    {
      title: 'Beoogde resultaten',
      highlightedText: 'Leerling, ouders en leraar worden eigenaar van het leerproces',
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
