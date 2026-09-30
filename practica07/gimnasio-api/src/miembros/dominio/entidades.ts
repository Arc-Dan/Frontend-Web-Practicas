export interface Miembro {
  id: number;
  nombre: string;
  correo: string;
  membresia: string;
  activo: boolean;
}

//export type MembresiaMiembro = 'regular' | 'premium';


// Lo que hace falta para crear una: nada de id, estado ni creadaEn.
// Eso lo decide el dominio, no quien manda la peticion.
export type NuevoMiembro = Omit<Miembro, 'id' | 'activo'>;

