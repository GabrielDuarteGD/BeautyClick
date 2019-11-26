import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {

  pacientes: any[] = [];
  termino: string;

  constructor( private activatedRoute: ActivatedRoute,
               private _pacientesService: PacientesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params.termino;
      console.log(params.termino);
      this.pacientes = this._pacientesService.buscarPacientes(params.termino);

    });
  }

}
