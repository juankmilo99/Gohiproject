import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';
import { ToastrService } from 'ngx-toastr';
import { TaskService } from './../../services/tasks.service';
import { UsuarioEncuesta } from './../../models/usuarioEncuesta.model';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-usuario-encuesta',
  templateUrl: './usuario-encuesta.component.html',
  styleUrls: ['./usuario-encuesta.component.css']
})
export class UsuarioEncuestaComponent implements OnInit {
  public encuestaArr: any = [];
  public usuarioArr: any = [];
  public usuarioEncuestaArr: any = [];
  usuarioEncuesta={
    "encuestadimencionid": 0,
     "usuarioid": 0
};

public usuarioEncuestaSeleccionada: UsuarioEncuesta;
public tmpBase64: any;

public modalRef: BsModalRef;
public modalTitulo: string;
public modalCuerpo: string;
public modalContenido: string;

  constructor(private taskService: TaskService, public miModal: BsModalService, public miMensaje: ToastrService) {
    this.usuarioEncuestaSeleccionada= this.inicializarUsuarioEncuesta();
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
   }

  ngOnInit(): void {
    this.taskService.getUsuario()
    .subscribe(
      res => {
        this.usuarioArr = res;
      },
      err => console.log(err)
    )
    this.taskService.getEncuestaDimencion()
    .subscribe(
      res => {
        this.encuestaArr = res;
      },
      err => console.log(err)
    )
    this.taskService.getUsuarioEncuesta()
    .subscribe(
      res => {
        this.usuarioEncuestaArr = res;
      },
      err => console.log(err)
    )


  }

  public inicializarUsuarioEncuesta(): UsuarioEncuesta {
    return new UsuarioEncuesta(0, 0, 0);
  }

  public seleccionarUsuarioEncuesta(objrespuesta: UsuarioEncuesta): void {
    this.usuarioEncuestaSeleccionada = objrespuesta;
    console.log(objrespuesta, 'mi objeto');
  }

  public resetearUsuarioEncuesta(): void {
    this.usuarioEncuestaSeleccionada = this.inicializarUsuarioEncuesta();

  }
  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.usuarioEncuestaSeleccionada.encuestadimencionid == 0 &&
      this.usuarioEncuestaSeleccionada.usuarioid == 0

    ) {
      bandera = false;
    }
    return bandera;
  }

  //***********LOGICA DE NEGOCIO************************************************

  public agregarUsuarioEncuesta(): void {
    if (this.datosValidos()) {
      this.usuarioEncuesta.encuestadimencionid= this.usuarioEncuestaSeleccionada.encuestadimencionid;
      this.usuarioEncuesta.usuarioid = this.usuarioEncuestaSeleccionada.usuarioid;
      console.log(this.usuarioEncuesta,'bandera');
      this.taskService.crearUsuarioEncuesta(this.usuarioEncuesta)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )
      this.resetearUsuarioEncuesta();
    } else {
      mostrarMensaje('error', 'no se puede crear UsuarioEncuesta', 'advertencia', this.miMensaje);
    }
  }

  public borrarUsuarioEncuesta(): void {
    this.taskService.deleteUsuarioEncuesta(this.usuarioEncuestaSeleccionada.encuestadimencionid,this.usuarioEncuestaSeleccionada.usuarioid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearUsuarioEncuesta();
  }
  public actualizarUsuarioEncuesta(): void {
    this.usuarioEncuesta.encuestadimencionid= this.usuarioEncuestaSeleccionada.encuestadimencionid;
    this.usuarioEncuesta.usuarioid = this.usuarioEncuestaSeleccionada.usuarioid;
    console.log(this.usuarioEncuesta,'bandera');
    this.taskService.updateUsuarioRespuesta(this.usuarioEncuesta,this.usuarioEncuestaSeleccionada.encuestadimencionid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearUsuarioEncuesta();
  }

  public abrirModal(platilla: TemplateRef<any>, objrespuesta: UsuarioEncuesta): void {
    this.usuarioEncuestaSeleccionada = objrespuesta;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas elimiar la relacion ?';
    this.modalContenido = this.usuarioEncuestaSeleccionada.usuarioid.toString() ;
  }

  public btnBorrarUsuarioRespuesta(): void {
    this.borrarUsuarioEncuesta();
    this.btnCancelar();
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }

}
