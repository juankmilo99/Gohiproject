import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.css']
})
export class PrivateComponent implements OnInit {

  public showSidebar;

  constructor() {
    this.showSidebar = true;
  }

  ngOnInit(): void {
  }

  public toggleSidebar() {
    this.showSidebar = !this.showSidebar;
  }
}
