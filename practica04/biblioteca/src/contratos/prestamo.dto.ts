import type { Prestamo, EstadoPrestamo } from '../dominio/prestamo.entity.js';

export interface PrestamoResponseDto {
  folio: string;
  libroId: string;
  ejemplares: number[];
  socioId: string;
  estado: EstadoPrestamo;
  creadoEn: string; // ISO
}

//Lo que el cliente manda
export interface CrearPrestamoRequestDto {
    libroId: string;
    ejemplares: number[];
    socioId: string;
}

export interface ErrorResponseDto {
    error: string;
    mensaje: string;
    detalles?: string[];
}

//Mapper de entidad a DTO
export function aResponseDto(p: Prestamo): PrestamoResponseDto {
  return {
    folio: p.folio,
    libroId: p.libroId,
    ejemplares: p.ejemplares,
    socioId: p.socioId,
    estado: p.estado,
    creadoEn: p.creadoEn.toISOString(),
  };
}
