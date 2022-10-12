import { BarraComponent } from './componentes/barra/barra.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonaComponent } from './componentes/dona/dona.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'barra', component: BarraComponent },
      { path: 'dona', component: DonaComponent },
      { path: '**', redirectTo: 'barra' }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GraficasRoutingModule { }
