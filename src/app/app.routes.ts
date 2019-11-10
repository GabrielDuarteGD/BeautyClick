import { RouterModule, Routes } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AltaPacienteComponent } from './components/paciente/alta-paciente/alta-paciente.component';
import { RecetaComponent } from './components/paciente/receta/receta.component';


const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'alta-paciente', component: AltaPacienteComponent },
  {path: 'receta', component: RecetaComponent },
  {path: 'about', component: AboutComponent },
  {path: 'heroes', component: HeroesComponent },
  {path: 'heroe/:id', component: HeroeComponent },
  {path: 'buscar/:termino', component: BuscadorComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);