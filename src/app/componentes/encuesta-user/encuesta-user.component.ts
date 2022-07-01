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
  public preguntaArr: any = [];
  public respuestaArr: number[] = [0,1,6,11,16,21,26,31,36,41,46,51,56];
  public respuestaArr1: number[] = [0,2,7,12,17,22,27,32,37,42,47,52,57];
  public respuestaArr2: number[] = [0,3,8,13,18,23,28,33,38,43,48,53,58];
  public respuestaArr3: number[] = [0,4,9,14,19,24,29,34,39,44,49,54,59];
  public respuestaArr4: number[] = [0,5,10,15,20,25,30,35,40,45,50,55,60];
  public preguntaSeleccionada: Pregunta;
  public usuarioRespuestaSeleccionada: UsuarioRespuesta;
  usuarioRespuesta = {
    "usuariorespuestaid":1,
    "respuestaid": 0,
    "usuarioid": 2
  };
  datos2:any = [];


  constructor(private taskService: TaskService) {
    this.preguntaSeleccionada = this.inicializarPregunta();
    this.usuarioRespuestaSeleccionada = this.inicializarUsuarioRespuesta();
  }

  ngOnInit(): void {
    this.taskService.getPregunta()
      .subscribe(
        res => {
          for (let preg of res) {
            if (preg.encuestadimencionid == 1) {
              this.preguntaArr.push(preg);
            }
          }
        },
        err => console.log(err)
      )

  }

  public inicializarPregunta(): Pregunta {
    return new Pregunta(0, 0, '');
  }
  public seleccionarUsuarioRespuesta(objpregunta: Pregunta): void {
      this.usuarioRespuesta.respuestaid=this.respuestaArr[objpregunta.preguntaid];
      this.usuarioRespuestaSeleccionada=this.usuarioRespuesta;
      console.log(this.usuarioRespuesta);
  }

  public seleccionarUsuarioRespuesta1(objpregunta: Pregunta): void {
    this.usuarioRespuesta.respuestaid=this.respuestaArr1[objpregunta.preguntaid];
    console.log(this.usuarioRespuesta);
}

public seleccionarUsuarioRespuesta2(objpregunta: Pregunta): void {
  this.usuarioRespuesta.respuestaid=this.respuestaArr2[objpregunta.preguntaid];
  console.log(this.usuarioRespuesta);
}

public seleccionarUsuarioRespuesta3(objpregunta: Pregunta): void {
  this.usuarioRespuesta.respuestaid=this.respuestaArr3[objpregunta.preguntaid];
  console.log(this.usuarioRespuesta);
}

public seleccionarUsuarioRespuesta4(objpregunta: Pregunta): void {
  this.usuarioRespuesta.respuestaid=this.respuestaArr4[objpregunta.preguntaid];
  console.log(this.usuarioRespuesta);
}

  public inicializarUsuarioRespuesta(): UsuarioRespuesta {
    return new UsuarioRespuesta(0, 0, 0);
  }



  public resetearUsuarioRespuesta(): void {
    this.usuarioRespuestaSeleccionada = this.inicializarUsuarioRespuesta();

  }

}
