import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



//Rutas
import {APP_ROUTING} from './app.routes';



//Servicios
import { HeroesService } from './services/heroes.service';

//Componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';

import { from } from 'rxjs';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
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
    HeroesComponent,
    HeroeComponent,
    BuscadorComponent,
    HeroeTarjetaComponent,
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
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
