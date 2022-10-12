import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgChartsModule} from 'ng2-charts'
import { GraficasRoutingModule } from './graficas-routing.module';
import { BarraComponent } from './componentes/barra/barra.component';
import { DonaComponent } from './componentes/dona/dona.component';



@NgModule({
  declarations: [
    BarraComponent,
    DonaComponent
  ],
  imports: [
    CommonModule,
    GraficasRoutingModule,
    NgChartsModule


  ]
})
export class GraficasModule { }
