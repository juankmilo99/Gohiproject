import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  public showSidebar;
  public tokenDecoded;

  constructor() {
    this.showSidebar = true;
    this.tokenDecoded = jwt_decode(JSON.stringify(localStorage.getItem('token')));
  }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
