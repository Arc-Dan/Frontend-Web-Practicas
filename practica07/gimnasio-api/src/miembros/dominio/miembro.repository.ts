import { Miembro, NuevoMiembro } from './entidades';

// La interfaz que el Service conoce. No sabe si detras hay un Map en
// memoria o MySQL: ese es el punto de la Sesion 7.
//
// Todos los metodos devuelven Promise aunque hoy el Map no lo necesite:
// el contrato se disena para el caso mas lento.
export interface MiembroRepository {
  listar(): Promise<Miembro[]>;
  buscarPorId(id: number): Promise<Miembro | null>;
  crear(datos: NuevoMiembro): Promise<Miembro>;
  actualizar(id: number, datos: Partial<NuevoMiembro>): Promise<Miembro | null>;
  eliminar(id: number): Promise<Miembro | null>;
}