import { Injectable } from '@nestjs/common';
import { Miembro, NuevoMiembro } from '../dominio/entidades';
import { MiembroRepository } from '../../miembros/dominio/miembro.repository';

// La palabra clave es "implements": esta clase promete cumplir la
// interfaz de arriba. En la Sesion 7, InscripcionPrismaRepository
// implementa la misma interfaz contra MySQL, y nadie mas se entera.
@Injectable()
export class MiembroMemoriaRepository implements MiembroRepository {
  private miembros: Miembro[] = [];
  private siguienteId = 1;

  async listar(): Promise<Miembro[]> {
    return this.miembros;
  }

  async buscarPorId(id: number): Promise<Miembro | null> {
    return this.miembros.find((i) => i.id === id) ?? null;
  }

  async crear(datos: NuevoMiembro): Promise<Miembro> {
    const nuevo: Miembro = {
      id: this.siguienteId++,
      nombre: datos.nombre,
      correo: datos.correo,
      membresia: 'regular',
      activo: true,
    };
    this.miembros.push(nuevo);
    return nuevo;
  }

async actualizar(id: number, datos: Partial<NuevoMiembro>): Promise<Miembro | null> {
const miembro = this.miembros.find((m) => m.id === id);
if (!miembro) { return null; }
Object.assign(miembro, datos);
return miembro;
}

  async eliminar(id: number): Promise<Miembro | null> {
    const miembro = this.miembros.find((i) => i.id === id);
    if (!miembro) return null;
    miembro.activo = false;
    return miembro;
  }
}
