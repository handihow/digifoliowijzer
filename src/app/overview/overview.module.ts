import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedModule } from '../shared/shared.module';

import { OverviewRoutingModule } from './overview.routing.module';
import { OverviewComponent } from './overview.component';
import { AdditionalRequirementsComponent } from './additional-requirements/additional-requirements.component';
import { PortfolioTypeChartComponent } from './portfolio-type-chart/portfolio-type-chart.component';
import { ChildParentContributionComponent } from './child-parent-contribution/child-parent-contribution.component';
import { FinalTextComponent } from './final-text/final-text.component';
import { CreateReportComponent } from './create-report/create-report.component';
import { PdfTitleComponent } from './pdf-title/pdf-title.component';

@NgModule({
  declarations: [
    OverviewComponent,
    AdditionalRequirementsComponent,
    PortfolioTypeChartComponent,
    ChildParentContributionComponent,
    FinalTextComponent,
    CreateReportComponent,
    PdfTitleComponent,
  ],
  imports: [
    CommonModule,
    OverviewRoutingModule,
    ChartsModule,
    FontAwesomeModule,
    SharedModule,
  ],
})
export class OverviewModule {}
