import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CorreoComponent } from './Componets/correo/correo.component';
import { ListaCorreosComponent } from './Componets/lista-correos/lista-correos.component';
import { NuevoCorreoComponent } from './Componets/nuevo-correo/nuevo-correo.component';
import { AvisosComponent } from './Componets/avisos/avisos.component';
import { CorreosRecibidosComponent } from './Componets/correos-recibidos/correos-recibidos.component';

@NgModule({
  declarations: [
    AppComponent,
    CorreoComponent,
    ListaCorreosComponent,
    NuevoCorreoComponent,
    AvisosComponent,
    CorreosRecibidosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
