import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService } from '../../services/pacientes.service';



@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html'
})
export class PacienteComponent {

  paciente: any = {};
  constructor(private activatedRoute: ActivatedRoute,
              private _pacientesService: PacientesService ) {
    this.activatedRoute.params.subscribe( params  => {
      console.log( params.id );
      this.paciente = this._pacientesService.getPaciente( params.id);
    });
   }

}
