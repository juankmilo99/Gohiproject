

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
    if (this.datosValidosPreg()) {
      this.pregunta.codigo_encuesta = localStorage.getItem('codEncuesta');
      this.pregunta.codigo_dimension = codDimension;
      this.pregunta.pregunta = this.preguntaSeleccionada.pregunta
      console.log(this.pregunta, 'bandera2');
      this.taskService.crearPregunta(this.pregunta)
        .subscribe(
          res => {
            console.log(res)
          },
          err => console.log(err)
        )
      this.resetearPregunta();
    } else {
      console.log('paila');
    }
  }

  public optenerPreguntaDimension(codDimension: number): void {
    this.encuesta.codigo_dimension = codDimension;
    console.log(this.encuesta);
    this.taskService.optenerPreguntaDimension(this.encuesta, localStorage.getItem('codEncuesta'))
      .subscribe(
        res => {
          this.preguntasArr = res;
          this.preguntasArr.array.forEach(preg => {
            preg.estado = 1;

          });
          console.log(this.preguntasArr);
        },
        err => console.log(err)
      )


  }

  public agregarPreguntaArr(): void {
    this.preguntasArr.push({ pregunta:this.preguntaSeleccionada.pregunta, estado:0 });
    this.preguntaSeleccionada.pregunta='';


  }

}
