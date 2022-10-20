import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fill-out',
  templateUrl: './fill-out.component.html',
  styleUrls: ['./fill-out.component.css']
})
export class FillOutComponent implements OnInit {

  public options: Array<any>;

  constructor() {
    this.options = FillOutComponent.initOptions();
  }

  ngOnInit(): void {
  }

  private static initOptions() {
    return [
      {id: 1, name: 'Nada satisfecho'},
      {id: 2, name: 'Insatisfecho'},
      {id: 3, name: 'Poco satisfecho'},
      {id: 4, name: 'Satisfecho'},
      {id: 5, name: 'Muy satisfecho'},
    ]
  }

}
