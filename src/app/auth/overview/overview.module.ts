import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { OverviewRoutingModule } from './overview.routing.module';
import { OverviewComponent } from './overview.component';
import { AdditionalRequirementsComponent } from './additional-requirements/additional-requirements.component';
import { PortfolioTypeChartComponent } from './portfolio-type-chart/portfolio-type-chart.component';
import { ChildParentContributionComponent } from './child-parent-contribution/child-parent-contribution.component';

@NgModule({
  declarations: [OverviewComponent, AdditionalRequirementsComponent, PortfolioTypeChartComponent, ChildParentContributionComponent],
  imports: [CommonModule, OverviewRoutingModule, ChartsModule, FontAwesomeModule],
})
export class OverviewModule {}
