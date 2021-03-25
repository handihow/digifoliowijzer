
import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../../models/user.state.model';
import TableRow from '../../../models/table.row.model';
import TableColumnTitle from '../../../models/table.title.model';
import Settings from '../../settings';

import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-questions-page-three',
  templateUrl: './questions-page-three.component.html',
  styleUrls: ['./questions-page-three.component.css']
})
export class QuestionsPageThreeComponent implements OnInit {

  @Input() userState: UserState | undefined;
  @Input() property: string = '';

  rows: TableRow[] = [];
  titles: TableColumnTitle[] = [
    {
      title: 'Bijdrage van leerling',
      property: '',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: 'Bijdrage van het kind',
      infoHighlight: 'Kies of het kind zelf de bijdrage plaatst in het portfolio',
      infoText:
        'Je kiest op deze pagina of kinderen zelf bijdrage(n) kunnen plaatsen in het portfolio per leeftijdscategorie.',
    },
    ...Settings.standardTitles
  ];
  columns: string[] = ['development', 'evaluation', 'presentation'];

  constructor(private uiService: UiService) {}

  ngOnInit(): void {
    this.rows = Settings.ageRows;
  }

  openModal(index: number) {
    this.uiService.setModalState({
      title: this.titles[index].infoTitle || '',
      highlight: this.titles[index].infoHighlight || '',
      text: this.titles[index].infoText || '',
      showModal: true
    })
  }

}
