import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  public titulo: string;
  constructor(public authService: AuthService) {
    this.titulo = "LOG-OUT";

  }

  ngOnInit(): void {
  }

}
