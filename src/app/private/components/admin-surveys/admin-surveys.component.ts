import { Encuesta } from './../../../core/models/encuesta.model';
import { Router } from '@angular/router';
import { TaskService } from './../../../core/services/tasks.service';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-admin-surveys',
  templateUrl: './admin-surveys.component.html',
  styleUrls: ['./admin-surveys.component.css']
})
export class AdminSurveysComponent implements OnInit {
  public encuestasArr: any = [];
  public encuestaSeleccionada: Encuesta;

  encuesta:any ={
    "activo": 0
  };


  public tmpBase64: any;
  public modalRef: BsModalRef;
  public modalTitulo: string;
  public modalCuerpo: string;
  public modalContenido: string;

  constructor(private taskService: TaskService,private router: Router,public miModal: BsModalService) {
    this.encuestaSeleccionada= this.inicializarEncuesta();
    this.modalRef = this.tmpBase64;
    this.modalTitulo = '';
    this.modalCuerpo = '';
    this.modalContenido = '';
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

  public inicializarEncuesta(): Encuesta {
    return new Encuesta(0,0,'','',0);
  }

    //***********LOGICA DE NEGOCIO************************************************

  public abrirEncuestaPregunta(codEncuesta:any): void {
    console.log(codEncuesta)
    localStorage.setItem('codEncuesta', codEncuesta);
    this.router.navigate(['/dash/surveys/detail/'+ codEncuesta]);
  }

  public actualizarEstadoEncuesta(): void {
    if(this.encuestaSeleccionada.activo==1){
      this.encuesta.activo=0;
    }else{
      this.encuesta.activo=1;
    }
    console.log(this.encuesta,this.encuestaSeleccionada.codigo);
    this.taskService.actualizarEstadoEncuesta(this.encuesta , this.encuestaSeleccionada.codigo)
    .subscribe(
      res => {
        console.log(res);
      },
      err => console.log(err)
    )


}

  public abrirModal(platilla: TemplateRef<any>, objencuesta: Encuesta): void {
    this.encuestaSeleccionada = objencuesta;
    this.modalRef = this.miModal.show(platilla, { class: 'modal-md' });
    this.modalTitulo = 'Advertancia';
    this.modalCuerpo = 'En realidad deseas cambiar el estado de la encuesta ?';
    this.modalContenido = objencuesta.nombre;
  }

  public btnActualizarEstadoEncuesta(): void {
    this.actualizarEstadoEncuesta();
    this.btnCancelar();
  }

  public btnCancelar(): void {
    this.modalRef.hide();
  }

}
