import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  private heroes: Heroe[] = [
    {
      nombre: 'Ailen Gualda',
      bio: 'Celular: 3513112543',
      img: 'assets/img/chica1.jpg',
      aparicion: 'ailenguarda@gmail.com',
      casa: 'Sancor Salud'
    },
    {
      nombre: 'Maria Gomez',
      bio: 'Celular: 3513114438',
      img: 'assets/img/chica2.jpg',
      aparicion: 'mariagomez@gmail.com',
      casa: "Medife"
    },
    {
      nombre: 'Diana Lopez',
      bio: 'Celular: 3514562288',
      img: 'assets/img/chica3.jpg',
      aparicion: 'dianalopez@gmail.com',
      casa: 'Swiss Medical'
    },
    {
      nombre: 'Cynthia Juarez',
      bio: 'Celular: 3517782243',
      img: 'assets/img/chica4.jpg',
      aparicion: 'cynthiajurez@gmail.com',
      casa: 'MET'
    },
    {
      nombre: 'Agustina Alvarez',
      bio: 'Celular: 3518112255',
      img: 'assets/img/chica5.jpg',
      aparicion: 'agustinaalvarez@gmail.com',
      casa: 'OMINT'
    },
    {
      nombre: 'Rocio Rodriguez',
      bio: 'Celular: 3512088212',
      img: 'assets/img/chica8.jpg',
      aparicion: 'rociorodriguez@gmail.com',
      casa: 'Nobis'
    },
    {
      nombre: 'Flor Deloto',
      bio: 'Celular: 3515988762',
      img: 'assets/img/chica7.jpg',
      aparicion: 'flordeloto@gmail.com',
      casa: 'OSIM'
    }
  ];
  constructor() {
    console.log('Servicio listo para usar!');
  }
  getHeroes(): Heroe[] {
    return this.heroes;
  }

  getHeroe(idx: string) {
    return this.heroes[idx];
  }

  buscarHeroes(termino: string): Heroe[] {
    let heroesArr: Heroe[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < this.heroes.length; i++) {
      let heroe = this.heroes[i];
      let nombre = heroe.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        heroe.idx = i;
        heroesArr.push(heroe);
      }
    }
    console.log(heroesArr);
    return heroesArr;
  }



}


export interface Heroe {
  nombre: string;
  bio: string;
  img: string;
  aparicion: string;
  casa: string;
  idx?: number;
}
