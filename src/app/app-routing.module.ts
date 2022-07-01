import { UsuarioEncuestaComponent } from './componentes/usuario-encuesta/usuario-encuesta.component';
import { EncuestaUserComponent } from './componentes/encuesta-user/encuesta-user.component';
import { UsuarioRespuestaComponent } from './componentes/usuario-respuesta/usuario-respuesta.component';


import { PreguntaComponent } from './componentes/pregunta/pregunta.component';

import { EncuestaDimencionComponent } from './componentes/encuesta-dimencion/encuesta-dimencion.component';
import { AuthGuard } from './auth.guard';
import { RegisterComponent } from './componentes/register/register.component';
import { InicioDashUComponent } from './dashboard-user/inicio-dash-u/inicio-dash-u.component';
import { ContenedorUComponent } from './dashboard-user/contenedor-u/contenedor-u.component';
import { LoginComponent } from './componentes/login/login.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { InicioDashComponent } from './dashboard/inicio-dash/inicio-dash.component';
import { ContenedorDashComponent } from './dashboard/contenedor-dash/contenedor-dash.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RespuestaComponent } from './componentes/respuesta/respuesta.component';

const routes: Routes = [
  { path: 'home', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'dash', component: ContenedorDashComponent,
    canActivate:[AuthGuard],
    children: [
      { path: 'dashHome', component: InicioDashComponent },
      { path: 'encuestaDim', component: EncuestaDimencionComponent },
      { path: 'preguntas', component: PreguntaComponent },
      { path: 'respuesta', component: RespuestaComponent },
      { path: 'usuariorespuesta', component: UsuarioRespuestaComponent },
      { path: 'usuarioencuesta', component: UsuarioEncuestaComponent },



      { path: '', redirectTo: 'dashHome', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent }
    ]
  },

  {
    path: 'dashUser', component: ContenedorUComponent,
    canActivate:[AuthGuard],
    children:[
      { path: 'dashHomeUser', component: InicioDashUComponent },
      { path: 'encuestaUser', component: EncuestaUserComponent },

      { path: '', redirectTo: 'dashHomeUser', pathMatch: 'full' },
      { path: '**', component: NoEncontradoComponent }
    ]
  },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
