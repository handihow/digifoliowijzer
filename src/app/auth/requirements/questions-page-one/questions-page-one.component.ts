import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../user.state.model';
import Row from '../../moscow.row.model';
import MoscowColumnTitle from '../../moscow.title.model';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-questions-page-one',
  templateUrl: './questions-page-one.component.html',
  styleUrls: ['./questions-page-one.component.css'],
})
export class QuestionsPageOneComponent implements OnInit {
  @Input() userState: UserState | undefined;
  @Input() property: string = '';

  showModal: boolean = false;
  modalTitle: string = '';
  modalHighlight: string = '';
  modalText: string = '';

  rows: Row[] = [];
  titles: MoscowColumnTitle[] = [
    {
      title: 'Type portfolio',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: 'Type portfolio',
      infoHighlight: 'Kies het type portfolio per leeftijdscategorie',
      infoText:
        'Je kiest op deze pagina het type portfolio per leeftijdscategorie. Sommige onderdelen zijn wellicht minder relevant voor jongere leerlingen. De eisen kunnen hier worden gewijzigd naar eigen inzicht.',
    },
    {
      title: 'Ontwikkeling',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'proces',
      infoTitle: 'Ontwikkelingsportfolio (proces)',
      infoHighlight: 'Zichtbaar maken van een ontwikkeling',
      infoText:
        'Hoe leert de leerling; door middel van zelfreflectie, zelfevaluatie, inzicht in zwakke en sterke punten en competenties/vaardigheden. (Laten) zien en er op reflecteren.',
    },
    {
      title: 'Beoordeling',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'evaluatie',
      infoTitle: 'Beoordelingsportfolio (evaluatie)',
      infoHighlight:
        'Zichtbaar maken van het eindresultaat van de ontwikkeling',
      infoText:
        'De nadruk ligt vooral op de evaluatie en beoordeling van hetgeen wat is bereikt, alleen wordt dit niet door de leerling zelf beoordeeld.',
    },
    {
      title: 'Presentatie',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'product',
      infoTitle: 'Presentatieportfolio (product)',
      infoHighlight: 'Producten waar een leerling trots op is of goed in is',
      infoText:
        'Showt de pronkstukken van een leerling, er is te zien wat een leerling al heeft bereikt, maar niet wat en hoe iets is geleerd.',
    },
  ];
  columns: string[] = ['development', 'evaluation', 'presentation'];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.rows = this.authService.getRows();
  }

  toggleModal() {
    this.showModal = !this.showModal;
  }

  openModal(index: number) {
    this.modalTitle = this.titles[index].infoTitle || '';
    this.modalHighlight = this.titles[index].infoHighlight || '';
    this.modalText = this.titles[index].infoText || '';
    this.toggleModal();
  }
}
