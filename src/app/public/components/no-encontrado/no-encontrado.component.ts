import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-no-encontrado',
  templateUrl: './no-encontrado.component.html',
  styleUrls: ['./no-encontrado.component.css']
})
export class NoEncontradoComponent implements OnInit {

  constructor(private destino: Location) { }

  ngOnInit(): void {
  }
  public regresar(): void {
    this.destino.back();
  }

}
