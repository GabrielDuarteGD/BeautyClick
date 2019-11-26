import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PacientesService, Paciente } from '../../services/pacientes.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() paciente: any = {};

  pacientes: Paciente[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              // tslint:disable-next-line: variable-name
              private _pacientesService: PacientesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.pacientes = this._pacientesService.getPacientes();
    });
  }



}
