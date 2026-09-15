import type { CrearPrestamoRequestDto } from '../contratos/prestamo.dto.js';
import { ValidacionError } from './errores-http.js';

export function validarCrearPrestamo(cuerpo: unknown): CrearPrestamoRequestDto {
    const errores: string[] = [];

    if (typeof cuerpo !== 'object' || cuerpo === null) {
        throw new ValidacionError(['El cuerpo de la solicitud debe ser un objeto JSON.']);
    }

    const c = cuerpo as Record<string, unknown>;

    if (typeof c.libroId !== 'string' || c.libroId.trim() === '') {
        errores.push('El campo "libroId" es obligatorio y debe ser una cadena no vacía.');
    }

    if(typeof c.socioId !== 'string' || c.socioId.trim() === '') {
        errores.push('El campo "socioId" es obligatorio y debe ser una cadena no vacía.');
    }

    if (!Array.isArray(c.ejemplares) || c.ejemplares.length === 0) {
        errores.push('Ejemplares debe ser un arreglo con al menos un elemento.');
    } else if (c.ejemplares.some((e) => typeof e !== 'number' || !Number.isInteger(e) || e <= 0)) {
        errores.push('Ejemplares sólo admite números enteros positivos.');
    }

    if (errores.length > 0) {
        throw new ValidacionError(errores);
    }

    return c as unknown as CrearPrestamoRequestDto;
}