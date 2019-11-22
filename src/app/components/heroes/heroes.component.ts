import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];
  constructor(private _heroesService: HeroesService,
              private _router: Router ) {
    console.log('Constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.heroes = this._heroesService.getHeroes();
    console.log(this.heroes);
  }

  verHeroe(idx: number) {
    console.log(idx);
    this._router.navigate( ['/heroe', idx]);
  }

  buscar(termino: string) {
    this._heroesService.getHeroe(termino)
    .subscribe( (data: any) => {
      console.log(data);
});
  }

}

