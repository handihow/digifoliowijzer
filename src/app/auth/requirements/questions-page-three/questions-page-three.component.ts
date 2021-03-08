
import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../user.state.model';
import Row from '../../moscow.row.model';
import MoscowColumnTitle from '../../moscow.title.model';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-questions-page-three',
  templateUrl: './questions-page-three.component.html',
  styleUrls: ['./questions-page-three.component.css']
})
export class QuestionsPageThreeComponent implements OnInit {

  @Input() userState: UserState | undefined;
  @Input() property: string = '';

  showModal: boolean = false;
  modalTitle: string = '';
  modalHighlight: string = '';
  modalText: string = '';

  rows: Row[] = [];
  titles: MoscowColumnTitle[] = [
    {
      title: 'Contributie van leerling',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: 'Contributie van het kind',
      infoHighlight: 'Kies of het kind zelf de bijdrage plaatst in het portfolio',
      infoText:
        'Je kiest op deze pagina of kinderen zelf bijdrage(n) kunnen plaatsen in het portfolio per leeftijdscategorie.',
    },
    {
      title: 'Ontwikkeling',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'proces',
      infoTitle: 'Ontwikkelingsportfolio (proces)',
      infoHighlight: 'Zichtbaar maken van een ontwikkeling',
      infoText:
        'Een ontwikkelingsportfolio laat zien hoe iemand zich (heeft) ontwikkelt, en laat dus groei zien. De lerende neemt informatie op over de eigen competenties en het functioneren door het systematisch terugblikken. Dit is een goed instrument voor reflectie, het stimuleert ook metacognitieve leeractiviteiten. De lerende moet duidelijk geïnformeerd worden over het niveau van de behaalde en te behalen competenties. Formatief van eigenschappen.',
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
        'De nadruk bij een beoordelingsportfolio ligt vooral op de evaluatie en beoordeling van hetgeen wat is bereikt, alleen wordt dit niet door de leerling zelf beoordeeld. Het gepresenteerde \'bewijs\' kan zowel summatief als formatief worden ingezet.',
    },
    {
      title: 'Presentatie',
      hasSubtitle: true,
      hasInfoBtn: true,
      subtitle: 'product',
      infoTitle: 'Presentatieportfolio (product)',
      infoHighlight: 'Producten waar een leerling trots op is of goed in is',
      infoText:
        'Presenteert de pronkstukken van een leerling, er is te zien wat een leerling kan en al heeft bereikt, maar niet wat en hoe iets is geleerd.',
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
