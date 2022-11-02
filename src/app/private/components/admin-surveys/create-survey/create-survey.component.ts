import { Dimension } from './../../../../core/models/dimension.model';
import { TaskService } from './../../../../core/services/tasks.service';
import { Encuesta } from './../../../../core/models/encuesta.model';
import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/core/models/pregunta.model';


@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css']
})
export class CreateSurveyComponent implements OnInit {
  public encuestaSeleccionada: Encuesta;
  public dimensionSeleccionada: Dimension;
  public preguntaSeleccionada: Pregunta;
  public dimensionesArr: any = [];
  public newEncuesta: any = [];
  encuesta ={
    "codigo_usuario":1,
    "nombre":"",
    "descricpcion":"",
    "activo":0,

  };

  pregunta ={
    "codigo_encuesta": 0,
    "codigo_dimension": 0,
    "pregunta":""
  };

  constructor(private taskService: TaskService) {
    this.encuestaSeleccionada= this.inicializarEncuesta();
    this.dimensionSeleccionada = this.inicializarDimension();
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

  public inicializarEncuesta(): Encuesta {
    return new Encuesta(0,0,'','',0);
  }
  public inicializarPregunta(): Pregunta {
    return new Pregunta(0 , 0 , 0 , '');
  }

  public inicializarDimension(): Dimension {
    return new Dimension( 0 , '' );
  }

  public resetearEncuesta(): void {
    this.encuestaSeleccionada = this.inicializarEncuesta();
  }

  public resetearPregunta(): void {
    this.preguntaSeleccionada = this.inicializarPregunta();
  }

  public resetearDimension(): void {
    this.dimensionSeleccionada = this.inicializarDimension();
  }

  public datosValidosEncu(): boolean {
    let bandera = true;
    if (
      this.encuestaSeleccionada.nombre == ''||
      this.encuestaSeleccionada.descricpcion == ''

    ) {
      bandera = false;
    }
    return bandera;
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

  public agregarEncuesta(): void {
    if (this.datosValidosEncu()) {
      this.encuesta.nombre = this.encuestaSeleccionada.nombre;
      this.encuesta.descricpcion= this.encuestaSeleccionada.descricpcion;
      console.log(this.encuesta,'bandera');
      this.taskService.crearEncuesta(this.encuesta)
      .subscribe(
        res => {
          this.newEncuesta = res;
          console.log(this.newEncuesta)
        },
        err => console.log(err)
      )
      this.resetearEncuesta();
    } else {
      console.log('paila');
    }
  }

  public agregarPregunta(codDimension:number): void {
    if (this.datosValidosPreg()) {
      console.log(this.newEncuesta.id[0].codigo)
      this.pregunta.codigo_encuesta = this.newEncuesta.id[0].codigo;
      this.pregunta.codigo_dimension= codDimension;
      this.pregunta.pregunta= this.preguntaSeleccionada.pregunta
      console.log(this.pregunta,'bandera2');
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

}
