import { ModalModule } from 'ngx-bootstrap/modal';
import { FormsModule } from '@angular/forms';
import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './components/login/login.component';
import { NoEncontradoComponent } from './components/no-encontrado/no-encontrado.component';


@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    NoEncontradoComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
  ]
})
export class PublicModule { }
