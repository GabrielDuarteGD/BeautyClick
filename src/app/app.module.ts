import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Rutas
import {APP_ROUTING} from './app.routes';



//Servicios
import { PacientesService } from './services/pacientes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PacientesComponent } from './components/pacientes/pacientes.component';

import { from } from 'rxjs';
import { PacienteComponent } from './components/heroe/paciente.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { PacienteTarjetaComponent } from './components/paciente-tarjeta/paciente-tarjeta.component';
import { AltaPacienteComponent } from './components/paciente/alta-paciente/alta-paciente.component';
import { RecetaComponent } from './components/paciente/receta/receta.component';
import { TratamientoComponent } from './components/paciente/tratamientos/tratamiento/tratamiento.component';
import { NuevoTratamientoComponent } from './components/paciente/tratamientos/nuevo-tratamiento/nuevo-tratamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PacientesComponent,
    PacienteComponent,
    BuscadorComponent,
    PacienteTarjetaComponent,
    AltaPacienteComponent,
    RecetaComponent,
    TratamientoComponent,
    NuevoTratamientoComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    PacientesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
