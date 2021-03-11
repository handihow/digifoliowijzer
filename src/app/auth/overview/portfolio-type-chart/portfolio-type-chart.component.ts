import { Component, Input, OnInit } from '@angular/core';
import {
  MoSCoWRequirement,
  PortfolioType,
  UserState,
} from '../../user.state.model';
import { get } from 'lodash';

import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
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
  lineChartProps: ChartDataSets = {
    borderWidth: 5,
    yAxisID: 'y-axis-portfolioRequirements',
    type: 'line',
  };
  barChartProps = {
    yAxisID: 'y-axis-portfolioType',
    type: 'bar',
  };
  chartData: ChartDataSets[] = [
    {
      data: [],
      label: 'ontwikkeling',
      ...this.lineChartProps,
    },
    {
      data: [],
      label: 'beoordeling',
      ...this.lineChartProps,
    },
    {
      data: [],
      label: 'presentatie',
      ...this.lineChartProps,
    },
    {
      data: [],
      label: 'fysiek',
      ...this.barChartProps,
    },
    {
      data: [],
      label: 'digitaal',
      ...this.barChartProps,
    },
  ];
  lineChartLabels: Label[] = ['4-6 jaar', '7-9 jaar', '10-12 jaar'];
  lineChartOptions: ChartOptions = {
    legend: {
      display: true,
      position: 'bottom',
    },
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
          id: 'x-axis',
          stacked: true,
          gridLines: {
            display: false,
          },
          ticks: {
            fontSize: 16,
            fontStyle: 'bold',
            fontFamily: 'Noto Sans',
          },
        },
      ],
      yAxes: [
        {
          id: 'y-axis-portfolioRequirements',
          position: 'left',
          gridLines: {
            display: false,
          },
          ticks: {
            display: true,
            fontSize: 14,
            fontFamily: 'Noto Sans',
            callback: (value) => {
              let displayedValue = '';
              switch (value) {
                case 0:
                  displayedValue = "Won't";
                  break;
                case 1:
                  displayedValue = 'Could';
                  break;
                case 2:
                  displayedValue = 'Should';
                  break;
                case 3:
                  displayedValue = 'Must';
                  break;
                default:
                  break;
              }
              return displayedValue;
            },
            min: -0.1,
            max: 3.1,
          },
        },
        {
          id: 'y-axis-portfolioType',
          stacked: true,
          position: 'right',
          gridLines: {
            display: false,
          },
          ticks: {
            display: true,
            fontSize: 14,
            fontFamily: 'Noto Sans',
            callback: (value) => {
              let displayedValue = '';
              switch (value) {
                case 0:
                  displayedValue = 'Fysiek';
                  break;
                case 1:
                  displayedValue = 'Mix';
                  break;
                case 2:
                  displayedValue = 'Digitaal';
                  break;
                default:
                  break;
              }
              return displayedValue;
            },
          },
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
  lineChartColors: Color[] = [
    {
      // development = info color
      backgroundColor: 'rgba(62,142,208,0)',
      borderColor: 'rgb(62,142,208)',
      pointBackgroundColor: 'rgb(62,142,208)',
      pointBorderColor: 'rgb(62,142,208)',
      pointHoverBackgroundColor: 'rgb(62,142,208)',
      pointHoverBorderColor: 'rgba(62,142,208,0.8)',
    },
    {
      // evaluation = warning color
      backgroundColor: 'rgba(255,71,15,0)',
      borderColor: 'rgb(255,71,15)',
      pointBackgroundColor: 'rgb(255,71,15)',
      pointBorderColor: 'rgb(255,71,15)',
      pointHoverBackgroundColor: 'rgb(255,71,15)',
      pointHoverBorderColor: 'rgba(255,71,15,0.8)',
    },
    {
      // presentation = primary color
      backgroundColor: 'rgba(71,94,198,0)',
      borderColor: 'rgb(71,94,198)',
      pointBackgroundColor: 'rgb(71,94,198)',
      pointBorderColor: 'rgb(71,94,198)',
      pointHoverBackgroundColor: 'rgb(71,94,198)',
      pointHoverBorderColor: 'rgba(71,94,198,0.8)',
    },
    {
      // physical = primary color
      // backgroundColor: 'rgb(244,244,244)',
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
          const value = get(this.userState, [
            'portfolioRequirements',
            type,
            age,
          ]) as MoSCoWRequirement;
          const correctedValue =
            !this.userState?.hasAdvancedUI &&
            [MoSCoWRequirement.COULD, MoSCoWRequirement.SHOULD].includes(value)
              ? 1.5
              : value;
          const displayedValue = 3 - correctedValue;
          this.chartData[index].data?.push(displayedValue);
        });
      });
      ['fourToSix', 'sevenToNine', 'tenToTwelve'].forEach((age) => {
        const value = get(this.userState, [
          'portfolioType',
          age,
        ]) as PortfolioType;
        this.chartData[3].data?.push(2 - value);
        this.chartData[4].data?.push(value);
      });
      this.doneInitializing = true;
    }
  }

  getTooltip(tooltipType: string, value: number, prefix: string) {
    let tooltip = '';
    switch (tooltipType) {
      case 'physical':
        tooltip = value === 0 ? 'digitaal' : value === 1 ? 'mix' : 'fysiek';
        break;
      case 'digital':
        tooltip = value === 0 ? 'fysiek' : value === 1 ? 'mix' : 'digitaal';
        break;
      default:
        tooltip =
          value === 0
            ? "won't"
            : value === 1
            ? 'could'
            : value === 2
            ? 'should'
            : value === 3
            ? 'must'
            : 'could/should';
        break;
    }
    return prefix + ': ' + tooltip;
  }
}
