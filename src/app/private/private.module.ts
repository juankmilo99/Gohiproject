import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { PrivateComponent } from './private.component';
import { SharedModule } from "../shared/shared.module";
import { HomeComponent } from './components/home/home.component';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { AdminSurveysComponent } from './components/admin-surveys/admin-surveys.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { AdminProcessesComponent } from './components/admin-processes/admin-processes.component';
import { DetailSurveyComponent } from './components/admin-surveys/detail-survey/detail-survey.component';
import { CreateSurveyComponent } from './components/admin-surveys/create-survey/create-survey.component';
import { MySurveysComponent } from './components/my-surveys/my-surveys.component';
import { FillOutComponent } from './components/my-surveys/fill-out/fill-out.component';
import { CreateProcessComponent } from './components/admin-processes/create-process/create-process.component';
import { StatisticsProcessComponent } from './components/admin-processes/statistics-process/statistics-process.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ToastrModule } from 'ngx-toastr';




@NgModule({
  declarations: [
    PrivateComponent,
    HomeComponent,
    SidebarComponent,
    NavbarComponent,
    FooterComponent,
    AdminSurveysComponent,
    AdminUsersComponent,
    AdminProcessesComponent,
    DetailSurveyComponent,
    CreateSurveyComponent,
    MySurveysComponent,
    FillOutComponent,
    CreateProcessComponent,
    StatisticsProcessComponent

  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    FormsModule,
    ModalModule.forRoot(),



  ]
})
export class PrivateModule { }
