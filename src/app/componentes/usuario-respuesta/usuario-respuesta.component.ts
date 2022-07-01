import { TaskService } from './../../services/tasks.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UsuarioRespuesta } from 'src/app/models/usuarioRespuesta.model';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';

@Component({
  selector: 'app-usuario-respuesta',
  templateUrl: './usuario-respuesta.component.html',
  styleUrls: ['./usuario-respuesta.component.css']
})
export class UsuarioRespuestaComponent implements OnInit {
  public respuestaArr: any = [];
  public usuarioArr: any = [];
  public usuarioRespuestaArr: any = [];
  usuarioRespuesta={
    "respuestaid":0,
    "usuarioid":0
  };
  public usuarioRespuestaSeleccionada: UsuarioRespuesta;
  public tmpBase64: any;

  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  constructor(private taskService: TaskService, public miModal: BsModalService, public miMensaje: ToastrService) {
    this.usuarioRespuestaSeleccionada= this.inicializarUsuarioRespuesta();
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
   }

  ngOnInit(): void {
    this.taskService.getUsuarioRespuesta()
    .subscribe(
      res => {
        this.usuarioRespuestaArr = res;
      },
      err => console.log(err)
    )
    this.taskService.getRespuesta()
    .subscribe(
      res => {
        this.respuestaArr = res;
      },
      err => console.log(err)
    )
    this.taskService.getUsuario()
    .subscribe(
      res => {
        this.usuarioArr = res;
        console.log(this.usuarioArr);
      },
      err => console.log(err)
    )
  }

  public inicializarUsuarioRespuesta(): UsuarioRespuesta {
    return new UsuarioRespuesta(0, 0, 0);
  }

  public seleccionarUsuarioRespuesta(objrespuesta: UsuarioRespuesta): void {
    this.usuarioRespuestaSeleccionada = objrespuesta;
    console.log(objrespuesta, 'mi objeto');
  }

  public resetearUsuarioRespuesta(): void {
    this.usuarioRespuestaSeleccionada = this.inicializarUsuarioRespuesta();

  }
  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.usuarioRespuestaSeleccionada.respuestaid == 0 &&
      this.usuarioRespuestaSeleccionada.usuarioid == 0

    ) {
      bandera = false;
    }
    return bandera;
  }

  //***********LOGICA DE NEGOCIO************************************************

  public agregarUsuarioRespuesta(): void {
    if (this.datosValidos()) {
      this.usuarioRespuesta.respuestaid= this.usuarioRespuestaSeleccionada.respuestaid;
      this.usuarioRespuesta.usuarioid = this.usuarioRespuestaSeleccionada.usuarioid;
      console.log(this.usuarioRespuesta,'bandera');
      this.taskService.crearUsuarioRespuesta(this.usuarioRespuesta)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )
      this.resetearUsuarioRespuesta();
    } else {
      mostrarMensaje('error', 'no se puede crear UsuarioRespuesta', 'advertencia', this.miMensaje);
    }
  }

  public borrarUsuarioRespuesta(): void {
    this.taskService.deleteUsuarioRespuesta(this.usuarioRespuestaSeleccionada.usuariorespuestaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearUsuarioRespuesta();
  }
  public actualizarUsuarioRespuesta(): void {
    this.usuarioRespuesta.respuestaid= this.usuarioRespuestaSeleccionada.respuestaid;
    this.usuarioRespuesta.usuarioid = this.usuarioRespuestaSeleccionada.usuarioid;
    console.log(this.usuarioRespuesta,'bandera');
    this.taskService.updateUsuarioRespuesta(this.usuarioRespuesta,this.usuarioRespuestaSeleccionada.usuariorespuestaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearUsuarioRespuesta();
  }

  public abrirModal(platilla: TemplateRef<any>, objrespuesta: UsuarioRespuesta): void {
    this.usuarioRespuestaSeleccionada = objrespuesta;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas elimiar la respuesta ?';
    this.modalContenido = this.usuarioRespuestaSeleccionada.usuariorespuestaid.toString() ;
  }

  public btnBorrarUsuarioRespuesta(): void {
    this.borrarUsuarioRespuesta();
    this.btnCancelar();
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }

}
