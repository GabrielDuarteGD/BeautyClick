import { Component, OnInit } from '@angular/core';
import { PacientesService, Paciente } from '../../services/pacientes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styles: []
})
export class PacientesComponent implements OnInit {

  pacientes: Paciente[] = [];
  constructor(private _pacientesService: PacientesService,
              private _router: Router ) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.pacientes = this._pacientesService.getPacientes();
    console.log(this.pacientes);
  }

  verPaciente(idx: number) {
    console.log(idx);
    this._router.navigate( ['/paciente', idx]);
  }

  buscar(termino: string) {
    this._pacientesService.getPaciente(termino)
    .subscribe( (data: any) => {
      console.log(data);
});
  }

}

