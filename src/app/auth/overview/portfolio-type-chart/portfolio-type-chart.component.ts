import { Component, Input, OnInit } from '@angular/core';
import {
  UserState,
} from '../../user.state.model';
import { get } from 'lodash';

import { ChartDataSets, ChartOptions, ChartType, ChartXAxe, ChartYAxe} from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-portfolio-type-chart',
  templateUrl: './portfolio-type-chart.component.html',
  styleUrls: ['./portfolio-type-chart.component.css'],
})
export class PortfolioTypeChartComponent implements OnInit {
  doneInitializing: boolean = false;
  @Input() userState: UserState | undefined;
  @Input() pdfPreview: boolean = false;
  requirementChartProps: ChartDataSets = {
    yAxisID: 'y-axis-portfolioRequirements',
    stack: 'requirements',
    type: 'bar',
  };
  typeChartProps = {
    yAxisID: 'y-axis-portfolioType',
    stack: 'types',
    type: 'bar',
  };
  xAxesProps: ChartXAxe = {
    stacked: true,
    offset: true,
    gridLines: {
      display: false,
    },
    ticks: {
      fontSize: 16,
      fontStyle: 'bold',
      fontFamily: 'Noto Sans',
    }
  };
  yAxesProps: ChartYAxe =  {
    stacked: true,
    gridLines: {
      display: false,
    },
    ticks: {
      display: true,
      fontSize: 14,
      stepSize: 20,
      fontFamily: 'Noto Sans',
      callback: (value: number) => {
        let displayedValue = value + '%';
        return displayedValue;
      },
    },
  };
  chartData: ChartDataSets[] = [
    {
      data: [],
      label: 'ontwikkeling',
      ...this.requirementChartProps,
    },
    {
      data: [],
      label: 'beoordeling',
      ...this.requirementChartProps,
    },
    {
      data: [],
      label: 'presentatie',
      ...this.requirementChartProps,
    },
    {
      data: [],
      label: 'fysiek',
      ...this.typeChartProps,
    },
    {
      data: [],
      label: 'digitaal',
      ...this.typeChartProps,
    },
  ];
  chartLabels: Label[] = ['4-6 jaar', '7-9 jaar', '10-12 jaar'];
  chartOptions: ChartOptions = {
    legend: {
      display: true,
      position: 'bottom',
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          ...this.xAxesProps
        }
      ],
      yAxes: [
        {
          id: 'y-axis-portfolioRequirements',
          position: 'left',
          ...this.yAxesProps
        },
        {
          id: 'y-axis-portfolioType',
          position: 'right',
          ...this.yAxesProps
        },
      ],
    },
    tooltips: {
      callbacks: {
        label: (tooltipItem) => {
          let tooltipType = 'portfolioRequirement';
          const prefix =
            tooltipItem?.datasetIndex === 0
              ? 'ontwikkeling'
              : tooltipItem?.datasetIndex === 1
              ? 'beoordeling'
              : tooltipItem?.datasetIndex === 2
              ? 'presentatie'
              : 'vorm';
          if (tooltipItem?.datasetIndex === 3) {
            tooltipType = 'physical';
          } else if (tooltipItem?.datasetIndex === 4) {
            tooltipType = 'digital';
          }
          const value: number =
            typeof tooltipItem?.yLabel === 'number' ? tooltipItem?.yLabel : 0;
          const tooltip = this.getTooltip(tooltipType, value, prefix);
          return tooltip;
        },
      },
    },
  };
  chartColors: Color[] = [
    {
      // development = info color
      backgroundColor: 'rgba(62,142,208,0.8)',
    },
    {
      // evaluation = warning color
      backgroundColor: 'rgba(255,71,15,0.8)',
    },
    {
      // presentation = link color
      backgroundColor: 'rgba(71,94,198,0.8)',
    },
    {
      // physical = primary color
      backgroundColor: 'rgba(72,199,142, 0.4)',
    },
    {
      // digital = primary color
      backgroundColor: 'rgba(72,199,142, 0.8)',
    },
  ];
  barChartType: ChartType = 'bar';

  // @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;

  constructor() {}

  ngOnInit(): void {
    if (this.userState) {
      ['development', 'evaluation', 'presentation'].forEach((type, index) => {
        ['fourToSix', 'sevenToNine', 'tenToTwelve'].forEach((age) => {
          const hasAgeGroup = get(this.userState, ['ageGroupIsAvailable', age]);
          if(hasAgeGroup){
            const value = get(this.userState, [
              'portfolioRequirements',
              type,
              age,
            ]);

            this.chartData[index].data?.push(value);
          } else {
            this.chartData[index].data?.push(0);
          }

        });
      });
      ['fourToSix', 'sevenToNine', 'tenToTwelve'].forEach((age) => {
        const hasAgeGroup = get(this.userState, ['ageGroupIsAvailable', age]);
          if(hasAgeGroup){
            const value = get(this.userState, [
              'portfolioType',
              age,
            ]);
            this.chartData[3].data?.push(100 - value);
            this.chartData[4].data?.push(value);
          } else {
            this.chartData[3].data?.push(0);
            this.chartData[4].data?.push(0);
          }
      });
      this.doneInitializing = true;
    }
  }

  getTooltip(tooltipType: string, value: number, prefix: string) {
    let tooltip = '';
    switch (tooltipType) {
      case 'physical':
        tooltip = value + '% fysiek';
        break;
      case 'digital':
        tooltip = value + '% digitaal';
        break;
      default:
        tooltip = value + '%'
        break;
    }
    return prefix + ': ' + tooltip;
  }
}
