import { MySurveysComponent } from './private/components/my-surveys/my-surveys.component';
import { FillOutComponent } from './private/components/my-surveys/fill-out/fill-out.component';
import { AdminSurveysComponent } from './private/components/admin-surveys/admin-surveys.component';
import { CreateSurveyComponent } from './private/components/admin-surveys/create-survey/create-survey.component';
import { DetailSurveyComponent } from './private/components/admin-surveys/detail-survey/detail-survey.component';
import { AdminProcessesComponent } from './private/components/admin-processes/admin-processes.component';
import { CreateProcessComponent } from './private/components/admin-processes/create-process/create-process.component';
import { StatisticsProcessComponent } from './private/components/admin-processes/statistics-process/statistics-process.component';
import { PrivateComponent } from './private/private.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from "./app.component";
import { HomeComponent } from './private/components/home/home.component';
import { NoEncontradoComponent } from './public/components/no-encontrado/no-encontrado.component';

const routes: Routes = [
  {
    path: 'public',
    component: AppComponent,
    loadChildren: () => import('./public/public.module').then( m => m.PublicModule )
  },
  {
    path: 'dash',
    component: AppComponent,
    loadChildren: () => import('./private/private.module').then( m => m.PrivateModule )
  },
  {
    path:'dashUser',
    component: PrivateComponent,
    children:[
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
      { path: '', redirectTo: 'home', pathMatch: 'full' },
    ]
  },

  { path: '', redirectTo: 'public',  pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
