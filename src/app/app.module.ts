import { RespuestaComponent } from './componentes/respuesta/respuesta.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { InicioDashComponent } from './dashboard/inicio-dash/inicio-dash.component';
import { ContenedorDashComponent } from './dashboard/contenedor-dash/contenedor-dash.component';
import { CabeceraComponent } from './dashboard/cabecera/cabecera.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPaginationModule } from "ngx-pagination";
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { CabeceraUComponent } from './dashboard-user/cabecera-u/cabecera-u.component';
import { ContenedorUComponent } from './dashboard-user/contenedor-u/contenedor-u.component';
import { InicioDashUComponent } from './dashboard-user/inicio-dash-u/inicio-dash-u.component';
import { RegisterComponent } from './componentes/register/register.component';
import { EncuestaDimencionComponent } from './componentes/encuesta-dimencion/encuesta-dimencion.component';
import { PreguntaComponent } from './componentes/pregunta/pregunta.component';
import { UsuarioRespuestaComponent } from './componentes/usuario-respuesta/usuario-respuesta.component';
import { EncuestaUserComponent } from './componentes/encuesta-user/encuesta-user.component';
import { UsuarioEncuestaComponent } from './componentes/usuario-encuesta/usuario-encuesta.component';






@NgModule({
  declarations: [
    AppComponent,
    NoEncontradoComponent,
    CabeceraComponent,
    ContenedorDashComponent,
    InicioDashComponent,
    InicioComponent,
    LoginComponent,
    CabeceraUComponent,
    ContenedorUComponent,
    InicioDashUComponent,
    RegisterComponent,
    EncuestaDimencionComponent,
    PreguntaComponent,
   RespuestaComponent,
   UsuarioRespuestaComponent,
   EncuestaUserComponent,
   UsuarioEncuestaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule

  ],
  providers: [
    AuthGuard,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
