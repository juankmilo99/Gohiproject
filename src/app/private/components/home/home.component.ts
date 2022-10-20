import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public infoGeneral: Array<any>;

  constructor() {
    this.infoGeneral = [
      {
        name: "Encuestas activas",
        icon: "chart-bar",
        value: 3
      },
      {
        name: "Encuestas finalizadas",
        value: 21,
        icon: "chart-area",
      },
      {
        name: "Respuestas pendientes",
        value: 13,
        icon: "chart-pie",
      },
    ];
  }

  ngOnInit(): void {
  }

}
