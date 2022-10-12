import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType, ChartOptions, ChartDataset } from 'chart.js';
import {BaseChartDirective} from 'ng2-charts'
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styles: [
  ]
})
export class BarraComponent implements OnInit {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];


  public barChartData: ChartData<'bar'> = {
    labels: [ 'dimencion 1', 'dimencion 2', 'dimencion 3', 'dimencion 4', 'dimencion 5', 'dimencion 6', 'dimencion 7' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'nada satisfecho' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'insatisfecho' },
      { data: [ 8, 38, 70, 59, 66, 80, 100 ], label: 'poco satisfecho' },
      { data: [ 10, 45, 65, 45, 77, 22, 80 ], label: 'satisfecho' },
      { data: [ 80, 62, 35, 50, 86, 82, 83 ], label: 'muy satisfecho' }
    ]
  };








  constructor() { }

  ngOnInit(): void {
  }

  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public randomize(): void {
    // Only Change 3 values
    this.barChartData.datasets[0].data = [
      Math.round(Math.random() * 100),
      59,
      80,
      Math.round(Math.random() * 100),
      56,
      Math.round(Math.random() * 100),
      40 ];

    this.chart?.update();
  }
}




