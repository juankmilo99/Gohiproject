import { TaskService } from './../../../core/services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-processes',
  templateUrl: './admin-processes.component.html',
  styleUrls: ['./admin-processes.component.css']
})
export class AdminProcessesComponent implements OnInit {
  public procesosArr: any = [];

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
    this.taskService.getProcesos()
      .subscribe(
        res => {
          this.procesosArr = res;
          console.log(this.procesosArr)
        },
        err => console.log(err)
      )
  }

}
