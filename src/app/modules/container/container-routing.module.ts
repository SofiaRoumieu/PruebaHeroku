import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AbmContainerComponent } from '../../Componentes/abm-container/abm-container.component';
import { AltaContainerComponent } from '../../Componentes/alta-container/alta-container.component';
import { BajaContainerComponent } from '../../Componentes/baja-container/baja-container.component';
import { ModificacionContainerComponent } from '../../Componentes/modificacion-container/modificacion-container.component';


const routes: Routes = [
  {
  path:'',
  children:[
    {path: '**', component: AbmContainerComponent},
    {path: 'turnosPorEspecialidad', component: AltaContainerComponent},
    {path: 'turnosPorDia', component: BajaContainerComponent},
    {path: 'turnosFinalizadosMedico', component: ModificacionContainerComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
