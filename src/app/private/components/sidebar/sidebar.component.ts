import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {


  @Input()
  public showSidebar: boolean = true;

  constructor() {

  }

  ngOnInit(): void {
  }

}
