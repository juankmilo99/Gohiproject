import { mostrarMensaje } from 'src/app/utilidades/mensajes.func';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from './../../models/respuesta.model';
import { UsuarioEncuesta } from './../../models/usuarioEncuesta.model';
import { TaskService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta.model';
import { UsuarioRespuesta } from 'src/app/models/usuarioRespuesta.model';

@Component({
  selector: 'app-encuesta-user',
  templateUrl: './encuesta-user.component.html',
  styleUrls: ['./encuesta-user.component.css']
})
export class EncuestaUserComponent implements OnInit {
  public EncuestaPreguntaArr: any = [];
  public RespuestaArr: any = [];
  respuesta={
    "preguntaid":0,
    "respuesta":0,
    "usuarioid":0
  };
  validar={
    "usuarioid": 0,
     "preguntaid": 0
  };

  public usuarioEncuestaSeleccionada: UsuarioEncuesta;
  public preguntaSeleccionada: Pregunta;
  public respuestaEncuSeleccionada: Respuesta;



  constructor(private taskService: TaskService,public miMensaje: ToastrService) {
    this.usuarioEncuestaSeleccionada= this.inicializarUsuarioEncuesta();
    this.preguntaSeleccionada = this.inicializarPregunta();
    this.respuestaEncuSeleccionada= this.inicializarRespuesta();

  }

  ngOnInit(): void {
     this.taskService.getEncuestaPregunta(localStorage.getItem('id'))
    .subscribe(
      res => {
        this.EncuestaPreguntaArr = res;
        console.log(this.EncuestaPreguntaArr)
      },
      err => console.log(err)
    )
    this.taskService.getRespuesta()
    .subscribe(
      res => {
        this.RespuestaArr = res;
        console.log(this.RespuestaArr)
      },
      err => console.log(err)
    )




  }
  public inicializarRespuesta(): Respuesta {
    return new Respuesta(0, 0, -1,0);
  }

  public inicializarPregunta(): Pregunta {
    return new Pregunta(0, 0, '');
  }
  public inicializarUsuarioEncuesta(): UsuarioEncuesta {
    return new UsuarioEncuesta(0, 0, 0);
  }

  public inicializarUsuarioRespuesta(): UsuarioRespuesta {
    return new UsuarioRespuesta(0, 0, 0);
  }
  public seleccionarRespuestaEncu(objrespuestaEncu: Respuesta): void {
    this.respuestaEncuSeleccionada = objrespuestaEncu;
    console.log(objrespuestaEncu, 'mi objeta');
  }
  public datosValidos(): boolean {
    let bandera = true;
    if (
      this.respuestaEncuSeleccionada.preguntaid == 0 &&
      this.respuestaEncuSeleccionada.respuesta == 0

    ) {
      bandera = false;
    }
    return bandera;
  }
  public validarRespuesta(objrespuestaEncu: Respuesta): boolean {
    let bandera = true;
    for (let val of this.RespuestaArr) {
      if (val.preguntaid==objrespuestaEncu.preguntaid && objrespuestaEncu.usuarioid ==val.usuarioid) {
        bandera= false;
      }
    }
    return bandera ;
  }

  public resetearRespuesta(): void {
    this.respuestaEncuSeleccionada = this.inicializarRespuesta();

  }

  //***********LOGICA DE NEGOCIO************************************************

  public agregarRespuesta(): void {
    if (this.datosValidos()) {
      this.respuesta.preguntaid = this.respuestaEncuSeleccionada.preguntaid;
      this.respuesta.respuesta= this.respuestaEncuSeleccionada.respuesta;
      this.respuesta.usuarioid= this.respuestaEncuSeleccionada.usuarioid;
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
  public actualizarRespuesta(): void {
    this.respuesta.preguntaid = this.respuestaEncuSeleccionada.preguntaid;
    this.respuesta.respuesta= this.respuestaEncuSeleccionada.respuesta;
    console.log(this.respuesta,'bandera');
    this.taskService.updateRespuesta(this.respuesta,this.respuestaEncuSeleccionada.respuestaid)
      .subscribe(
        res => {
          console.log(res);

        },
        err => console.log(err)
      )

      this.resetearRespuesta();
  }



}
