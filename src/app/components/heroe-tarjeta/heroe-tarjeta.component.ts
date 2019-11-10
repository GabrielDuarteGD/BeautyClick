import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};

  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
   }

  @Input() index: number;
  @Output() heroeSeleccionado: EventEmitter<number>;
  ngOnInit() {
  }

  verHeroe() {

//this.router.navigate( ['/heroe']);
this.heroeSeleccionado.emit( this.index );
}

}
