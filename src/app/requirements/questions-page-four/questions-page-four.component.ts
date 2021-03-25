import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../models/user.state.model';
import TableRow from '../../models/table.row.model';
import TableColumnTitle from '../../models/table.title.model';
import Settings from '../../shared/settings';

@Component({
  selector: 'app-questions-page-four',
  templateUrl: './questions-page-four.component.html',
  styleUrls: ['./questions-page-four.component.css']
})
export class QuestionsPageFourComponent implements OnInit {

  @Input() userState: UserState | undefined;
  @Input() property: string = '';

  showModal: boolean = false;
  modalTitle: string = '';
  modalHighlight: string = '';
  modalText: string = '';

  rows: TableRow[] = [];
  titles: TableColumnTitle[] = [
    {
      title: 'Bijdrage van ouders',
      property: 'parentContribution',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: 'Bijdrage van de ouders',
      infoHighlight: 'Kies of de ouders zelf de bijdrage plaatst in het portfolio',
      infoText:
        'Je kiest op deze pagina of ouders zelf bijdrage(n) kunnen leveren en plaatsen in het portfolio per leeftijdscategorie.',
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
