import { Component, Input, OnInit } from '@angular/core';
import { UserState } from '../../models/user.state.model';
import TableRow from '../../models/table.row.model';
import TableColumnTitle from '../../models/table.title.model';
import Settings from '../../shared/settings';
import { AuthService } from '../../services/auth.service';
import { get, set } from 'lodash';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

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

  faInfo = faInfo;
  rows: TableRow[] = [];
  titles: TableColumnTitle[] = [
    {
      title: "Typen portfolio's",
      property: 'portfolioType',
      hasSubtitle: false,
      hasInfoBtn: true,
      infoTitle: "Verhouding typen portfolio's",
      infoHighlight:
        'Geef een gewenste verhouding weer tussen de typen portfolio’s per leeftijdsgroep. Waar leg je de nadruk?',
      infoText:
        "Je kiest op deze pagina de gewenste verhouding tussen de type portfolio's per leeftijdscategorie. Een combinatie van verschillende onderdelen betekent in dit geval een nuance, namelijk dat je de inhoud en functie van verschillende typen voor ogen hebt. De laatste slider (presentatie) vult automatisch aan tot 100% en kan daarom niet bewogen worden. Vul niet van toepassing in als je niet van plan bent om een portfolio te gebruiken voor de betreffende leeftijdscategorie.",
    },
    ...Settings.standardTitles,
  ];
  columns: TableColumnTitle[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.rows = Settings.ageRows;
    this.columns = Settings.standardTitles;
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

  getIsHiddenMessage() {
    if (this.userState) {
      return this.userState.hasHiddenInfoMessage;
    } else {
      return false;
    }
  }

  onHideMessage() {
    if (this.userState) {
      this.authService.updateHideInfoMessage(this.userState.id);
    }
  }

  getValue(age: string, type: string) {
    const hasAgeGroup = this.hasAgeGroup(age);
    if(!hasAgeGroup){
      return 0;
    }
    if (this.userState && type === 'presentation') {
      return (
        100 -
        get(this.userState, ['portfolioRequirements', 'development', age]) -
        get(this.userState, ['portfolioRequirements', 'evaluation', age])
      );
    } else if (this.userState) {
      return get(this.userState, ['portfolioRequirements', type, age]);
    } else {
      return 0;
    }
  }

  setValue(value: any, age: string, type: string) {
    const oldValue : number = parseInt(get(this.userState, [
      'portfolioRequirements',
      type,
      age,
    ])) as number;
    const newValue : number = parseInt(value.target.value);
    const otherValue : number = parseInt(get(this.userState, [
      'portfolioRequirements',
      type === 'development' ? 'evaluation' : 'development',
      age,
    ])) as number;
    let newOtherValue : number = otherValue.valueOf();
    const otherValueHasToUpdate = (newValue + otherValue) >= 100 && newValue > oldValue;
    if(otherValueHasToUpdate){
      newOtherValue = 100 - newValue;
    }
    if (this.userState) {
      set(this.userState, ['portfolioRequirements', type === 'development' ? 'development' : 'evaluation', age], newValue);
      set(this.userState, ['portfolioRequirements', type === 'development' ? 'evaluation' : 'development', age], newOtherValue);
      set(this.userState, ['portfolioRequirements', 'presentation', age], 100 - newValue - newOtherValue);
      this.authService.updateUserState(this.userState);
    }
  }

  hasAgeGroup(ageGroup: string){
    return get(this.userState, ['ageGroupIsAvailable', ageGroup])
  }

  updateChecked(ageGroup: string){
    if (this.userState) {
      const updatedValue = !get(this.userState, ['ageGroupIsAvailable', ageGroup]);
      set(this.userState, ['ageGroupIsAvailable', ageGroup], updatedValue);
      this.authService.updateUserState(this.userState);
    }
  }

}
