import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-dash',
  templateUrl: './inicio-dash.component.html',
  styleUrls: ['./inicio-dash.component.css']
})
export class InicioDashComponent implements OnInit {
  public titulo: string;
  constructor() {
    this.titulo="usuario";
   }

  ngOnInit(): void {
  }

}
