import { Injectable } from '@angular/core';

@Injectable()
export class PacientesService {

  private pacientes: Paciente[] = [
    {
      nombre: 'Ailen',
      apellido: 'Gualda',
      bio: 'Celular: 3513112543',
      img: 'assets/img/chica1.jpg',
      aparicion: 'ailenguarda@gmail.com',
      tratamiento: 'Criolipolisis',
      turno: '15/12/2019',
      casa: 'Sancor Salud'
    },
    {
      nombre: 'Maria',
      apellido: 'Gomez',
      bio: 'Celular: 3513114438',
      img: 'assets/img/chica2.jpg',
      aparicion: 'mariagomez@gmail.com',
      tratamiento: 'Depilacion',
      turno: '15/12/2019',
      casa: 'Medife'
    },
    {
      nombre: 'Diana',
      apellido: 'Lopez',
      bio: 'Celular: 3514562288',
      img: 'assets/img/chica3.jpg',
      aparicion: 'dianalopez@gmail.com',
      tratamiento: 'Masaje',
      turno: '15/12/2019',
      casa: 'Swiss Medical'
    },
    {
      nombre: 'Cynthia',
      apellido: 'Juarez',
      bio: 'Celular: 3517782243',
      img: 'assets/img/chica4.jpg',
      aparicion: 'cynthiajurez@gmail.com',
      tratamiento: 'Masaje',
      turno: '15/12/2019',
      casa: 'MET'
    },
    {
      nombre: 'Agustina',
      apellido: 'Alvarez',
      bio: 'Celular: 3518112255',
      img: 'assets/img/chica5.jpg',
      aparicion: 'agustinaalvarez@gmail.com',
      tratamiento: 'Velvet',
      turno: '15/12/2019',
      casa: 'OMINT'
    },
    {
      nombre: 'Rocio',
      apellido: 'Rodriguez',
      bio: 'Celular: 3512088212',
      img: 'assets/img/chica8.jpg',
      aparicion: 'rociorodriguez@gmail.com',
      tratamiento: 'Velvet',
      turno: '15/12/2019',
      casa: 'Nobis'
    },
    {
      nombre: 'Flor',
      apellido: 'Deloto',
      bio: 'Celular: 3515988762',
      img: 'assets/img/chica7.jpg',
      aparicion: 'flordeloto@gmail.com',
      tratamiento: 'Depilacion',
      turno: '15/12/2019',
      casa: 'OSIM'
    }
  ];
  constructor() {
    console.log('Servicio listo para usar!');
  }
  getPacientes(): Paciente[] {
    return this.pacientes;
  }

  getPaciente(idx: string) {
    return this.pacientes[idx];
  }

  buscarPacientes(termino: string): Paciente[] {
    let pacientesArr: Paciente[] = [];
    termino = termino.toLowerCase();
    for (let i = 0; i < this.pacientes.length; i++) {
      let paciente = this.pacientes[i];
      let nombre = paciente.nombre.toLowerCase();
      if (nombre.indexOf(termino) >= 0) {
        paciente.idx = i;
        pacientesArr.push(paciente);
      }
    }
    console.log(pacientesArr);
    return pacientesArr;
  }



}


export interface Paciente {
  nombre: string;
  apellido?: string;
  bio: string;
  img: string;
  aparicion: string;
  tratamiento?: string;
  turno?: string;
  casa: string;
  idx?: number;
}
