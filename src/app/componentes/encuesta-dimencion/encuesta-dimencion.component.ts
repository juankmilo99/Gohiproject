import { TaskService } from './../../services/tasks.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { EncuestaDimencion } from 'src/app/models/encuestaDim.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';

@Component({
  selector: 'app-encuesta-dimencion',
  templateUrl: './encuesta-dimencion.component.html',
  styleUrls: ['./encuesta-dimencion.component.css']
})
export class EncuestaDimencionComponent implements OnInit {
  public encuestaDim: any = [];
  encuDim ={
    "nombredimencion":""
  };
  public encuestaSeleccionada: EncuestaDimencion;
  public tmpBase64: any;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;
  constructor(private taskService: TaskService, public miModal: BsModalService, public miMensaje: ToastrService) {
    this.encuestaSeleccionada = this.inicializarEncuestaDim();
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
  }

  ngOnInit(): void {
    this.taskService.getEncuestaDimencion()
      .subscribe(
        res => {
          this.encuestaDim = res;
        },
        err => console.log(err)
      )
  }

  public inicializarEncuestaDim(): EncuestaDimencion {
    return new EncuestaDimencion(0, '');
  }

  public seleccionarEncuestaDim(objencuesta: EncuestaDimencion): void {
    this.encuestaSeleccionada = objencuesta;
    console.log(objencuesta, 'mi objeto');
  }

  public resetearEncuestaDim(): void {
    this.encuestaSeleccionada = this.inicializarEncuestaDim();

  }

  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.encuestaSeleccionada.nombredimencion == ""

    ) {
      bandera = false;
    }
    return bandera;
  }

  //***********LOGICA DE NEGOCIO************************************************
  public agregarEncuestaDim(): void {
    if (this.datosValidos()) {
      this.encuDim.nombredimencion= this.encuestaSeleccionada.nombredimencion;
      console.log(this.encuDim,'bandera');
      this.taskService.crearEncuestaDimencion(this.encuDim)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )
      this.resetearEncuestaDim();
    } else {
      mostrarMensaje('error', 'no se puede crear EncuestaDim', 'advertencia', this.miMensaje);
    }
  }

  public borrarEncuestaDim(): void {
    this.taskService.deleteEncuestaDimencion(this.encuestaSeleccionada.encuestadimencionid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearEncuestaDim();
  }
  public actualizarEncuestaDim(): void {
    this.encuDim.nombredimencion= this.encuestaSeleccionada.nombredimencion;
      console.log(this.encuDim,this.encuestaSeleccionada.encuestadimencionid);
    this.taskService.updateEncuestaDimencion(this.encuDim,this.encuestaSeleccionada.encuestadimencionid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearEncuestaDim();
  }

  public abrirModal(platilla: TemplateRef<any>, objencuesta: EncuestaDimencion): void {
    this.encuestaSeleccionada = objencuesta;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas elimiar la dimencion ?';
    this.modalContenido = objencuesta.nombredimencion;
  }

  public btnBorrarEncuestaDim(): void {
    this.borrarEncuestaDim();
    this.btnCancelar();
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }

}
