import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-cabecera-u',
  templateUrl: './cabecera-u.component.html',
  styleUrls: ['./cabecera-u.component.css']
})
export class CabeceraUComponent implements OnInit {
  public titulo: string;

  constructor(public authService: AuthService) {
    this.titulo = "LOG-OUT";

  }

  ngOnInit(): void {
  }

}
