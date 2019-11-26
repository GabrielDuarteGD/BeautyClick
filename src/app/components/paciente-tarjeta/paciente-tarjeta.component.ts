import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-tarjeta',
  templateUrl: './paciente-tarjeta.component.html'
})
export class PacienteTarjetaComponent implements OnInit {

  @Input() paciente: any = {};

  constructor(private router: Router) {
    this.pacienteSeleccionado = new EventEmitter();
   }

  @Input() index: number;
  @Output() pacienteSeleccionado: EventEmitter<number>;
  ngOnInit() {
  }

  verPaciente() {

//this.router.navigate( ['/heroe']);
this.pacienteSeleccionado.emit( this.index );
}

}
