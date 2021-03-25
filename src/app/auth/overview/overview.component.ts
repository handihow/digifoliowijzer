import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { MoSCoWRequirement, UserState } from '../../models/user.state.model';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import Settings from '../settings';
import { Workbook, Worksheet } from 'exceljs';
import * as fs from 'file-saver';
import { get } from 'lodash';

interface OverviewItem {
  sidebarTitle: string;
  title?: string;
}

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
})
export class OverviewComponent implements OnInit {
  step: number = 1;
  userState: UserState | undefined;
  stateSub: Subscription | undefined;
  showMoscowInfoModal: boolean = false;
  pdfPreview: boolean = false;
  showLoader: boolean = false;
  overviewItems: OverviewItem[] = [
    {
      sidebarTitle: 'Type portfolio',
      title: '<strong>Gewenste verhoudingen</strong> | Bouwstenen bij inhoud, functie en vorm portfolio.'
    },
    {
      sidebarTitle: 'Bijdrage kind en ouders'
    },
    {
      sidebarTitle: 'Aanvullende eisen'
    },
    {
      sidebarTitle: 'Rapport maken'
    },
    {
      sidebarTitle: 'Tot slot'
    }
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.stateSub = this.authService.userState.subscribe((state) => {
      if (state.id.length === 0) return;
      this.userState = state;
      this.step = this.userState.componentStep || 1;
    });
  }

  setStep(step: number) {
    if (this.userState) {
      this.authService.updateUserStateComponentStep(this.userState.id, step);
    }
  }

  onFinish() {
    if (this.userState) {
      this.authService.setUserStateToFinished(this.userState.id);
    }
  }

  async generatePDF() {
    this.showLoader = true;
    this.pdfPreview = true;
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const pdf = new jsPDF('p', 'mm', 'a4', 1);
    const elementPage1 = document.getElementById('page1');
    if (elementPage1) {
      const canvasPage1 = await html2canvas(
        elementPage1,
        Settings.html2canvasOpt
      );
      const imagePage1 = canvasPage1.toDataURL('image/png');
      pdf.addImage(imagePage1, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.addPage();
    }
    const elementPage2 = document.getElementById('page2');
    if (elementPage2) {
      const canvasPage2 = await html2canvas(
        elementPage2,
        Settings.html2canvasOpt
      );
      const imagePage2 = canvasPage2.toDataURL('image/png');
      pdf.addImage(imagePage2, 'PNG', 0, 0, 210, 297, undefined, 'FAST');
      pdf.save('Digifoliowijzer-rapport' + '-' + new Date().toISOString() + '.pdf');
    }
    this.pdfPreview = false;
    this.showLoader = false;
  }

  generateExcel() {
    this.showLoader = true;
    const workbook = new Workbook();
    //add portfolio type table;
    const portfolioSheet = workbook.addWorksheet('Type portfolio');
    this.addPortfolioTypeTable(portfolioSheet);
    //add digital vs physical type table;
    const formSheet = workbook.addWorksheet('Vorm van portfolio');
    this.addPortfolioFormTable(formSheet);
    //add child contribution table;
    const childContributionSheet = workbook.addWorksheet('Contributie kind');
    this.addContributionTable(childContributionSheet, 'childContribution');
    //add parent contribution table;
    const parentContributionSheet = workbook.addWorksheet('Contributie ouders');
    this.addContributionTable(parentContributionSheet, 'parentContribution');
    //add additional requirements table;
    const additionalRequirementsSheet = workbook.addWorksheet('Aanvullende eisen');
    this.addAdditionalRequirementsTable(additionalRequirementsSheet);
    //add help text table;
    const helpTextSheet = workbook.addWorksheet('Uitleg');
    this.helpTextTable(helpTextSheet);
    //set downloadable file name
    let fname = 'Digifoliowijzer';

    //add data and file name and download
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      fs.saveAs(blob, fname + '-' + new Date().toISOString() + '.xlsx');
      this.showLoader = false;
    });
  }

  addPortfolioTypeTable(sheet: Worksheet) {

    sheet.columns = [
      {
        header: 'Type portfolio',
        key: 'type',
        width: 20,
        style: { font: { bold: true } },
      },
      ...Settings.sheetColumns
    ];

    Settings.ageRows.forEach((row) => {
      let newRow: any = {
        type: row.title,
        development: 'n.v.t.',
        evaluation: 'n.v.t.',
        presentation: 'n.v.t.',
      };
      ['development', 'evaluation', 'presentation'].forEach((type) => {
        const hasAgeGroup = get(this.userState, ['ageGroupIsAvailable', row.property]);
        if(hasAgeGroup){
          const value = get(this.userState, [
            'portfolioRequirements',
            type,
            row.property,
          ]);
          newRow[type] = value.toString() + "% van portfolio";
        }
      });
      let displayedRow = sheet.addRow(newRow);
      displayedRow.font = { bold: false };
    });
  }

  addPortfolioFormTable(sheet: Worksheet) {
    sheet.columns = [
      {
        header: 'Accent op fysiek of digitaal?',
        key: 'accent',
        width: 40,
        style: { font: { bold: true } },
      },
      {
        header: 'Gewenste vorm',
        key: 'form',
        width: 40,
        style: { font: { bold: true } },
      },
    ];

    Settings.ageRows.forEach((row) => {
      let newRow: any = {
        accent: row.title,
        form: 'n.v.t.'
      };
      const hasAgeGroup = get(this.userState, ['ageGroupIsAvailable', row.property]);
      if(hasAgeGroup){
        const value = get(this.userState, [
          'portfolioType',
          row.property,
        ]);
        const stringValue = value + '% digitaal';

        newRow.form = stringValue;
      }
      let displayedRow = sheet.addRow(newRow);
      displayedRow.font = { bold: false };
    });
  }

  addAdditionalRequirementsTable(sheet: Worksheet){
    sheet.columns = [
      {
        header: 'Stelling',
        key: 'topic',
        width: 110,
        style: { font: { bold: true } },
      },
      {
        header: 'Eis',
        key: 'demand',
        width: 20,
        style: { font: { bold: true } },
      },
    ];
    Settings.additionalRequirementRows.forEach(row => {
      const value = get(this.userState, [
        'additionalRequirements',
        row.property,
      ]) as MoSCoWRequirement;
      const stringValue = this.getStringValue(value);
      let displayedRow = sheet.addRow({
        topic: row.title,
        demand: stringValue
      });
      displayedRow.font = { bold: false };
    });
  }

  helpTextTable(sheet: Worksheet){
    sheet.columns = [
      {
        header: 'Onderdeel',
        key: 'title',
        width: 30,
        style: { font: { bold: true } },
      },
      {
        header: 'Samenvatting',
        key: 'summary',
        width: 50,
        style: { font: { bold: true } },
      },
      {
        header: 'Uitleg',
        key: 'explanation',
        width: 100,
        alignment: { vertical: 'top', wrapText: true },
        style: { font: { bold: true }, numFmt: '@' }
      },
    ];
    Settings.standardTitles.forEach(title => {
      let displayedRow = sheet.addRow({
        title: title.infoTitle,
        summary: title.infoHighlight,
        explanation: title.infoText
      });
      displayedRow.font = { bold: false };
      displayedRow.alignment = { vertical: 'top', wrapText: true };
    })
  }


  addContributionTable(sheet: Worksheet, property: string) {

    sheet.columns = [
      {
        header: property === 'childContribution' ? 'Bijdrage leerling':  'Bijdrage ouders',
        key: 'type',
        width: 30,
        style: { font: { bold: true } },
      },
      ...Settings.sheetColumns
    ];

    Settings.ageRows.forEach((row) => {
      let newRow: any = {
        type: row.title,
        development: 'n.v.t.',
        evaluation: 'n.v.t.',
        presentation: 'n.v.t.',
      };
      ['development', 'evaluation', 'presentation'].forEach((type) => {
        const hasAgeGroup = get(this.userState, ['ageGroupIsAvailable', row.property]);
        if(hasAgeGroup){
          const value = get(this.userState, [
            property,
            type,
            row.property,
          ]);
          const stringValue =  value ? 'wel bijdragen' : 'niet bijdragen';
          newRow[type] = stringValue;
        }
      });
      let displayedRow = sheet.addRow(newRow);
      displayedRow.font = { bold: false };
    });
  }

  getStringValue(value: MoSCoWRequirement) {
    return !this.userState?.hasAdvancedUI &&
    [MoSCoWRequirement.COULD, MoSCoWRequirement.SHOULD].includes(value)
      ? 'Should/could'
      : value === MoSCoWRequirement.MUST
      ? 'Must'
      : value === MoSCoWRequirement.SHOULD
      ? 'Should'
      : value === MoSCoWRequirement.COULD
      ? 'Could'
      : "Won't";
  }
}
