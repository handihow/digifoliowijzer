
import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../user.state.model';
import Row from '../../moscow.row.model';
import MoscowColumnTitle from '../../moscow.title.model';
import { AuthService } from '../../../auth.service';
import Settings from '../../settings';

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
      property: '',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: 'Contributie van het kind',
      infoHighlight: 'Kies of het kind zelf de bijdrage plaatst in het portfolio',
      infoText:
        'Je kiest op deze pagina of kinderen zelf bijdrage(n) kunnen plaatsen in het portfolio per leeftijdscategorie.',
    },
    ...Settings.standardTitles
  ];
  columns: string[] = ['development', 'evaluation', 'presentation'];

  constructor(private authService: AuthService) {}

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
