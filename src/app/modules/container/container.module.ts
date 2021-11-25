import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerRoutingModule } from './container-routing.module';
import { AbmContainerComponent } from '../../Componentes/abm-container/abm-container.component';
import { AltaContainerComponent } from '../../Componentes/alta-container/alta-container.component';
import { BajaContainerComponent } from '../../Componentes/baja-container/baja-container.component';
import { ModificacionContainerComponent } from '../../Componentes/modificacion-container/modificacion-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AbmContainerComponent,AltaContainerComponent,BajaContainerComponent,ModificacionContainerComponent],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ContainerModule { }
