

import { Pregunta } from './../../../../core/models/pregunta.model';
import { TaskService } from './../../../../core/services/tasks.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detail-survey',
  templateUrl: './detail-survey.component.html',
  styleUrls: ['./detail-survey.component.css']
})
export class DetailSurveyComponent implements OnInit {
  public dimensionesArr: any = [];
  public preguntasArr: any = [];
  public preguntaSeleccionada: Pregunta;
  pregunta: any = {
    "codigo_encuesta": 0,
    "codigo_dimension": 0,
    "pregunta": ""
  };

  encuesta: any = {
    "codigo_dimension": 0
  };
  constructor(private taskService: TaskService) {
    this.preguntaSeleccionada = this.inicializarPregunta();
  }

  ngOnInit(): void {
    this.taskService.getDimensiones()
      .subscribe(
        res => {
          this.dimensionesArr = res;
          console.log(this.dimensionesArr)
        },
        err => console.log(err)
      )
  }

  public inicializarPregunta(): Pregunta {
    return new Pregunta(0, 0, 0, '');
  }

  public resetearPregunta(): void {
    this.preguntaSeleccionada = this.inicializarPregunta();
  }

  public datosValidosPreg(): boolean {
    let bandera = true;
    if (
      this.preguntaSeleccionada.pregunta == ''
    ) {
      bandera = false;
    }
    return bandera;
  }
  //***********LOGICA DE NEGOCIO************************************************

  public agregarPregunta(codDimension: number): void {
    const requestArr = this.preguntasArr.filter(preg => preg.estado == 0);
    requestArr.forEach(element => {
      element.codigo_encuesta = localStorage.getItem('codEncuesta');
      element.codigo_dimension = codDimension;
    });
    console.log(requestArr);
    this.taskService.crearPregunta(requestArr)
    .subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    )
    this.resetearPregunta();

  }

  public optenerPreguntaDimension(codDimension: number): void {
    this.encuesta.codigo_dimension = codDimension;
    console.log(this.encuesta);
    this.taskService.optenerPreguntaDimension(this.encuesta, localStorage.getItem('codEncuesta'))
      .subscribe(
        res => {
          this.preguntasArr = res;
          this.preguntasArr.forEach(preg => {
            preg.estado = 1;

          });
          console.log(this.preguntasArr);
        },
        err => console.log(err)
      )


  }

  public agregarPreguntaArr(): void {
    if (this.datosValidosPreg()) {
      this.preguntasArr.push({ pregunta: this.preguntaSeleccionada.pregunta, estado: 0 });
      this.preguntaSeleccionada.pregunta = '';
    } else {
      console.log('paila');
    }


  }

}
