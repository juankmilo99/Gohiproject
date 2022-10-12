import { TaskService } from './../../services/tasks.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Respuesta } from 'src/app/models/respuesta.model';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent implements OnInit {
  public respuestaArr: any = [];
  public preguntaArr: any = [];
  public usuarioArr: any = [];
  public EncuestaPreguntaArr: any = [];
  respuesta={
    "preguntaid":0,
    "respuesta":0,
    "usuarioid":0
  };
  public respuestaSeleccionada:Respuesta;

  public tmpBase64: any;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  constructor(private taskService: TaskService, public miModal: BsModalService, public miMensaje: ToastrService) {
    this.respuestaSeleccionada= this.inicializarRespuesta();
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
   }

  ngOnInit(): void {
    this.taskService.getRespuesta()
    .subscribe(
      res => {
        this.respuestaArr = res;
      },
      err => console.log(err)
    )
    this.taskService.getEncuestaPregunta(this.respuestaSeleccionada.usuarioid)
    .subscribe(
      res => {
        this.EncuestaPreguntaArr = res;
        console.log(this.EncuestaPreguntaArr)
      },
      err => console.log(err)
    )

    this.taskService.getUsuario()
    .subscribe(
      res => {
        this.usuarioArr = res;
      },
      err => console.log(err)
    )
    this.taskService.getPregunta()
    .subscribe(
      res => {
        this.preguntaArr = res;
      },
      err => console.log(err)
    )

  }

  public inicializarRespuesta(): Respuesta {
    return new Respuesta(0, 0,-1, 0);
  }

  public seleccionarRespuesta(objrespuesta: Respuesta): void {
    this.respuestaSeleccionada = objrespuesta;
    console.log(objrespuesta, 'mi objeto');
    this.taskService.getEncuestaPregunta(this.respuestaSeleccionada.usuarioid)
    .subscribe(
      res => {
        this.EncuestaPreguntaArr = res;
        console.log(this.EncuestaPreguntaArr)
      },
      err => console.log(err)
    )
  }

  public capturarPreguntas(): void {
    this.respuestaSeleccionada.usuarioid= this.respuesta.usuarioid
    console.log(this.respuesta,'bandera');


  }

  public resetearRespuesta(): void {
    this.respuestaSeleccionada = this.inicializarRespuesta();

  }
  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.respuestaSeleccionada.preguntaid == 0 &&
      this.respuestaSeleccionada.respuesta == 0

    ) {
      bandera = false;
    }
    return bandera;
  }

  //***********LOGICA DE NEGOCIO************************************************

  public agregarRespuesta(): void {
    if (this.datosValidos()) {
      this.respuesta.preguntaid = this.respuestaSeleccionada.preguntaid;
      this.respuesta.respuesta= this.respuestaSeleccionada.respuesta;
      this.respuesta.usuarioid=this.respuestaSeleccionada.usuarioid
      console.log(this.respuesta,'bandera');
      this.taskService.crearRespuesta(this.respuesta)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )
      this.resetearRespuesta();
    } else {
      mostrarMensaje('error', 'no se puede crear pregunta', 'advertencia', this.miMensaje);
    }
  }

  public borrarRespuesta(): void {
    this.taskService.deleteRespuesta(this.respuestaSeleccionada.respuestaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearRespuesta();
  }
  public actualizarRespuesta(): void {
    this.respuesta.preguntaid = this.respuestaSeleccionada.preguntaid;
    this.respuesta.respuesta= this.respuestaSeleccionada.respuesta;
    console.log(this.respuesta,'bandera');
    this.taskService.updateRespuesta(this.respuesta,this.respuestaSeleccionada.respuestaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearRespuesta();
  }

  public abrirModal(platilla: TemplateRef<any>, objrespuesta: Respuesta): void {
    this.respuestaSeleccionada = objrespuesta;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas elimiar la respuesta ?';
    this.modalContenido = this.respuestaSeleccionada.respuestaid.toString() ;
  }

  public btnBorrarRespuesta(): void {
    this.borrarRespuesta();
    this.btnCancelar();
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }

}
