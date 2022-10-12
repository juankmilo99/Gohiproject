import { Component, OnInit } from '@angular/core';

interface MenuItem {
  ruta: string;
  texto: string;
}

@Component({
  selector: 'app-respuesta-resultado',
  templateUrl: './respuesta-resultado.component.html',
  styleUrls: ['./respuesta-resultado.component.css']
})
export class RespuestaResultadoComponent  {
  menu: MenuItem[] = [
    { ruta: '/dash/resultados/barra', texto: 'Barras' },
    { ruta: '/dash/resultados/dona', texto: 'Dona' },

  ];

}
