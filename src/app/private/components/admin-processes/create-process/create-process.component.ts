import { ToastrService } from 'ngx-toastr';
import { TaskService } from './../../../../core/services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Proceso } from 'src/app/core/models/proceso.model';
import { mostrarMensaje } from 'src/app/core/utilities/mensajes.func';

@Component({
  selector: 'app-create-process',
  templateUrl: './create-process.component.html',
  styleUrls: ['./create-process.component.css']
})
export class CreateProcessComponent implements OnInit {
  public procesoSeleccionado: Proceso;
  public newProceso: any = [];
  public encuestasArr: any = [];
  proceso ={
    "codigo_usuario":2,
    "codigo_encuesta":0,
    "nombre":"",
    "descripcion":"",
    "fecha_inicio":"",
    "fecha_fin":"",
    "estado":1

  };
  constructor(private taskService: TaskService,public miMensaje: ToastrService) {
    this.procesoSeleccionado = this.inicializarProceso();
  }

  ngOnInit(): void {
    this.taskService.getEncuestas()
    .subscribe(
      res => {
        this.encuestasArr = res;
        console.log(this.encuestasArr)
      },
      err => console.log(err)
    )
  }

  public inicializarProceso(): Proceso {
    return new Proceso(0 , 0, 0, '', 0, '', '', '');
  }
  public resetearProceso(): void {
    this.procesoSeleccionado = this.inicializarProceso();
  }
  public datosValidosproc(): boolean {
    let bandera = true;
    if (
      this.procesoSeleccionado.codigo_encuesta == 0||
      this.procesoSeleccionado.nombre == ''||
      this.procesoSeleccionado.descripcion == ''||
      this.procesoSeleccionado.fecha_inicio == ''||
      this.procesoSeleccionado.fecha_fin == ''
    ) {
      bandera = false;
    }
    return bandera;
  }

  //***********LOGICA DE NEGOCIO************************************************

  public agregarProceso(): void {
    if (this.datosValidosproc()) {
      this.proceso.codigo_encuesta = this.procesoSeleccionado.codigo_encuesta;
      this.proceso.nombre = this.procesoSeleccionado.nombre;
      this.proceso.descripcion = this.procesoSeleccionado.descripcion;
      this.proceso.fecha_inicio = this.procesoSeleccionado.fecha_inicio;
      this.proceso.fecha_fin = this.procesoSeleccionado.fecha_fin;
      console.log(this.proceso,'bandera');
      this.taskService.crearProcesos(this.proceso)
      .subscribe(
        res => {
          this.newProceso = res;
          console.log(this.newProceso)
          mostrarMensaje('success', 'proceso creado', 'advertencia', this.miMensaje);
        },
        err => console.log(err)
      )
      this.resetearProceso();
    } else {
      mostrarMensaje('error', 'no se puede crear proceso', 'advertencia', this.miMensaje);
    }
  }

}
