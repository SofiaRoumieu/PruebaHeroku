import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './Componentes/login/login.component';
import { BienvenidoComponent } from './Componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './Componentes/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

// FIREBASE
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { firebase } from "../environments/environment";
import { MenuComponent } from './Componentes/menu/menu.component';
import { AltaProductoComponent } from './Componentes/alta-producto/alta-producto.component';
import { TablaPaisesComponent } from './Componentes/tabla-paises/tabla-paises.component';
import { VerProductoComponent } from './Componentes/ver-producto/ver-producto.component';
import { ListaProductosComponent } from './Componentes/lista-productos/lista-productos.component';
import { DetalleProductoComponent } from './Componentes/detalle-producto/detalle-producto.component';
import { DetallePaisComponent } from './Componentes/detalle-pais/detalle-pais.component';
import { CargaContainerComponent } from './Componentes/carga-container/carga-container.component';
import { StockContainerPipe } from './pipes/stock-container.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidoComponent,
    ErrorComponent,
    MenuComponent,
    AltaProductoComponent,
    TablaPaisesComponent,
    VerProductoComponent,
    ListaProductosComponent,
    DetalleProductoComponent,
    DetallePaisComponent,
    CargaContainerComponent,
    StockContainerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatTableModule,
    MatIconModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule // auth
    //AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
