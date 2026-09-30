import { Injectable, Controller, Get, Post, Body } from '@nestjs/common';
// nest g service clases --no-spec


export interface Clase{
  id: number;
  nombre: string;
}

const clases: Clase[] = [
  {id: 1, nombre: "Yoga"},
  {id: 2, nombre: "Pilates"},
  {id: 3, nombre: "Spinning"}
];


@Injectable()
export class ClasesService {
  @Get('clases')
  listar(): Clase[]{
    return clases;
  }


  crear(nombre: string): Clase{
    const nueva: Clase = {id: clases.length +1, nombre: nombre};
    clases.push(nueva);
    return nueva;
  }
}
