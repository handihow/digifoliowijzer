import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../user.state.model';
import Row from '../../moscow.row.model';
import MoscowColumnTitle from '../../moscow.title.model';
import Settings from '../../settings';

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
      property: 'portfolioType',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: 'Type portfolio',
      infoHighlight: 'Kies het type portfolio per leeftijdscategorie',
      infoText:
        'Je kiest op deze pagina het type portfolio per leeftijdscategorie. Sommige onderdelen zijn wellicht minder relevant voor jongere leerlingen. De eisen kunnen hier worden gewijzigd naar eigen inzicht.',
    },
    ...Settings.standardTitles
  ];
  columns: string[] = ['development', 'evaluation', 'presentation'];

  constructor() {}

  ngOnInit(): void {
    this.rows = Settings.ageRows;
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
