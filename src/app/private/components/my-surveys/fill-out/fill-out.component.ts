import { TaskService } from './../../../../core/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Respuesta } from 'src/app/core/models/respuesta.model';

@Component({
  selector: 'app-fill-out',
  templateUrl: './fill-out.component.html',
  styleUrls: ['./fill-out.component.css']
})
export class FillOutComponent implements OnInit {
  public myUrl: string;
  public options: Array<any>;
  public encuPreguntasArr: any = [];
  public dimensionesArr: any = [];
  public respuestaSeleccionada: Respuesta;

  encuesta: any = {
    "codigo_dimension": 0
  };

  respuesta: any = {
    "codigo_pregunta": 0,
    "codigo_usuario_proceso": 0,
    "codigo_opcion": 0
  };

  constructor(private taskService: TaskService) {
    this.options = FillOutComponent.initOptions();
    this.respuestaSeleccionada = this.inicializarRespuesta();
    this.myUrl = window.location.pathname;
    console.log(this.myUrl.substring(22));
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

  public inicializarRespuesta(): Respuesta {
    return new Respuesta(0, 0, 0, 0);
  }

  public resetearRespuesta(): void {
    this.respuestaSeleccionada = this.inicializarRespuesta();
  }

  public datosValidosRespuesta(): boolean {
    let bandera = true;
    if (
      this.respuestaSeleccionada.codigo_opcion == 0
    ) {
      bandera = false;
    }
    return bandera;
  }

  private static initOptions() {
    return [
      { codigo_opcion: 1, name: 'Nada satisfecho' },
      { codigo_opcion: 2, name: 'Insatisfecho' },
      { codigo_opcion: 3, name: 'Poco satisfecho' },
      { codigo_opcion: 4, name: 'Satisfecho' },
      { codigo_opcion: 5, name: 'Muy satisfecho' },
    ]
  }
  //***********LOGICA DE NEGOCIO************************************************



  public optenerPreguntaDimensionUuid(codDimension: number): void {
    this.encuesta.codigo_dimension = codDimension;
    console.log(this.encuesta);
    this.taskService.optenerPreguntaDimensionUuid(this.encuesta, this.myUrl.substring(22))
      .subscribe(
        res => {
          this.encuPreguntasArr = res;
          this.encuPreguntasArr.forEach(preg => {
            preg.estado = 1;

          });
          console.log(this.encuPreguntasArr[0].codigo_usuario_proceso);

        },
        err => console.log(err)
      )


  }

  public agregarRespuestasArr(): void {
    if (this.datosValidosRespuesta()) {
      this.encuPreguntasArr.push({ codigo_opcion: this.respuestaSeleccionada.codigo_opcion, estado: 0 });
      this.respuestaSeleccionada.codigo_opcion = 0;
    } else {
      console.log('paila');
    }


  }

  }


