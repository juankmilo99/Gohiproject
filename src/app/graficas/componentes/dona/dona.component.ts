import { TaskService } from './../../../services/tasks.service';
import { baseColors } from 'ng2-charts';
import { ChartData, ChartType, ChartEvent, Color, ChartConfiguration } from 'chart.js';
import { Component, OnInit } from '@angular/core';
import { str } from 'ajv';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  public graficaArr:any=[];



  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Other'];

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [2, 3, 3, 2, 2], backgroundColor:["#9E120E","#FF5800","#FFB414"] },
    ]
  };


  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
  };

  public doughnutChartType: ChartType = 'doughnut';





  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getGrafica()
    .subscribe(
      res => {
        for(let item of res){
          this.graficaArr.push(item.cuenta);

        }
        const arrNum= this.graficaArr.map(str=>{
          return Number(str);
        });
       this.doughnutChartData.datasets[0].data=arrNum;
       console.log(this.doughnutChartData.datasets);




      },
      err => console.log(err)
    )


  }

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);

  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
