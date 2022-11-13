import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FillOutComponent } from './fill-out/fill-out.component';

const routes: Routes = [
  {
    path:'',
    component:PublicComponent,
    children:[
      {path:'login',component: LoginComponent},
      {path:'my-surveys/fill/:codigo', component: FillOutComponent},
      { path: '', redirectTo: 'login', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
