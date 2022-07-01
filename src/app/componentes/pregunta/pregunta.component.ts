import { TaskService } from './../../services/tasks.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Pregunta } from 'src/app/models/pregunta.model';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';
import { EncuestaDimencion } from 'src/app/models/encuestaDim.model';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent implements OnInit {
  public preguntaArr: any = [];
  public dimencionArr: any = [];
  pregunta ={
    "encuestadimencionid":0,
    "pregunta":""
  };
  encuDim ={
    "encuestadimencionid":0,
    "nombredimencion":""
  };
  public preguntaSeleccionada: Pregunta;
  public encuestaSeleccionada: EncuestaDimencion;
  public tmpBase64: any;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  constructor(private taskService: TaskService, public miModal: BsModalService, public miMensaje: ToastrService) {
    this.preguntaSeleccionada= this.inicializarPregunta();
    this.encuestaSeleccionada = this.inicializarEncuestaDim();

    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
   }

  ngOnInit(): void {
    this.taskService.getPregunta()
      .subscribe(
        res => {
          this.preguntaArr = res;
        },
        err => console.log(err)
      )
      this.taskService.getEncuestaDimencion()
      .subscribe(
        res => {
          this.dimencionArr = res;
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

  public inicializarPregunta(): Pregunta {
    return new Pregunta(0, 0,'');
  }

  public seleccionarPregunta(objpregunta: Pregunta): void {
    this.preguntaSeleccionada = objpregunta;
    console.log(objpregunta, 'mi objeto');
  }

  public resetearPregunta(): void {
    this.preguntaSeleccionada = this.inicializarPregunta();

  }

  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.preguntaSeleccionada.encuestadimencionid == 0||
      this.preguntaSeleccionada.pregunta == ''

    ) {
      bandera = false;
    }
    return bandera;
  }

  //***********LOGICA DE NEGOCIO************************************************

  public agregarPregunta(): void {
    if (this.datosValidos()) {
      this.pregunta.encuestadimencionid = this.preguntaSeleccionada.encuestadimencionid;
      this.pregunta.pregunta= this.preguntaSeleccionada.pregunta;
      console.log(this.pregunta,'bandera');
      this.taskService.crearPregunta(this.pregunta)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )
      this.resetearPregunta();
    } else {
      mostrarMensaje('error', 'no se puede crear pregunta', 'advertencia', this.miMensaje);
    }
  }

  public borrarPregunta(): void {
    this.taskService.deletePregunta(this.preguntaSeleccionada.preguntaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearPregunta();
  }
  public actualizarPregunta(): void {
    this.pregunta.encuestadimencionid = this.preguntaSeleccionada.encuestadimencionid;
      this.pregunta.pregunta= this.preguntaSeleccionada.pregunta;
    this.taskService.updatePregunta(this.pregunta,this.preguntaSeleccionada.preguntaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearPregunta();
  }

  public abrirModal(platilla: TemplateRef<any>, objpregunta: Pregunta): void {
    this.preguntaSeleccionada = objpregunta;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas elimiar la pregunta ?';
    this.preguntaSeleccionada.preguntaid.toString
    this.modalContenido = this.preguntaSeleccionada.preguntaid.toString() ;
  }

  public btnBorrarPregunta(): void {
    this.borrarPregunta();
    this.btnCancelar();
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }

}
