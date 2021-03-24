import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BienvenidoComponent} from './Componentes/bienvenido/bienvenido.component';
import {ErrorComponent} from './Componentes/error/error.component';
import {LoginComponent} from './Componentes/login/login.component';

const routes: Routes=[
  {path: '', component:BienvenidoComponent},
  {path:'login', component:LoginComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
