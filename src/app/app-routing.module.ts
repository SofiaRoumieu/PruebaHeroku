import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmContainerComponent } from './Componentes/abm-container/abm-container.component';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import {BienvenidoComponent} from './Componentes/bienvenido/bienvenido.component';
import {ErrorComponent} from './Componentes/error/error.component';
import {LoginComponent} from './Componentes/login/login.component';
import { VerProductoComponent } from './Componentes/ver-producto/ver-producto.component';
import { AuthGuard } from './guards/auth.guard';
import { CargaContainerComponent } from './Componentes/carga-container/carga-container.component';

const routes: Routes=[
  {path: 'home', component:BienvenidoComponent},
  {path: 'bienvenidos', component:BienvenidoComponent},
  {path:'altaProducto', component:AltaProductoComponent},
  {path:'login', component:LoginComponent},
  {path:'verProducto', component: VerProductoComponent, canActivate: [AuthGuard] },
  {path:'abmContainer',
   loadChildren:()=> import('./modules/container/container.module').then(m=>m.ContainerModule)
  },

  {path:'cargarContainer', component: CargaContainerComponent, canActivate: [AuthGuard] },
  {path:'',component:BienvenidoComponent},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
