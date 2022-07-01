import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-dash-u',
  templateUrl: './inicio-dash-u.component.html',
  styleUrls: ['./inicio-dash-u.component.css']
})
export class InicioDashUComponent implements OnInit {
  public titulo: any;
  constructor() {
    this.titulo=localStorage.getItem('nombre');
   }


  ngOnInit(): void {
  }

}
