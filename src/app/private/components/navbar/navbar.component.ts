import { AuthService } from './../../../core/services/auth.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public nombreUser: string;
  public tokenDecoded;

  @Output()
  public clickHamburger = new EventEmitter<void>();

  constructor(public authService: AuthService) {
    this.tokenDecoded = jwt_decode(JSON.stringify(localStorage.getItem('token')));
    this.nombreUser = this.tokenDecoded.user[0].nombre_usuario;
   }

  ngOnInit(): void {
  }

  toggleSidebar() {
    this.clickHamburger.emit();
  }

}
