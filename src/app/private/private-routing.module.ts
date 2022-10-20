import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { PrivateComponent } from "./private.component";
import { AdminSurveysComponent } from "./components/admin-surveys/admin-surveys.component";
import { AdminUsersComponent } from "./components/admin-users/admin-users.component";
import { AdminProcessesComponent } from "./components/admin-processes/admin-processes.component";
import { CreateSurveyComponent } from "./components/admin-surveys/create-survey/create-survey.component";
import { DetailSurveyComponent } from "./components/admin-surveys/detail-survey/detail-survey.component";
import { MySurveysComponent } from "./components/my-surveys/my-surveys.component";
import { FillOutComponent } from "./components/my-surveys/fill-out/fill-out.component";
import { CreateProcessComponent } from "./components/admin-processes/create-process/create-process.component";
import {
  StatisticsProcessComponent
} from "./components/admin-processes/statistics-process/statistics-process.component";

const routes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'my-surveys', component: MySurveysComponent },
      { path: 'my-surveys/fill/:codigo', component: FillOutComponent },
      { path: 'my-surveys/summary/:codigo', component: FillOutComponent },
      { path: 'surveys', component: AdminSurveysComponent },
      { path: 'surveys/create', component: CreateSurveyComponent },
      { path: 'surveys/edit/:codigo', component: CreateSurveyComponent },
      { path: 'surveys/detail/:codigo', component: DetailSurveyComponent },
      { path: 'processes', component: AdminProcessesComponent },
      { path: 'processes/create', component: CreateProcessComponent },
      { path: 'processes/edit/:codigo', component: CreateProcessComponent },
      { path: 'processes/statistics', component: StatisticsProcessComponent },
      { path: 'users', component: AdminUsersComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrivateRoutingModule { }
