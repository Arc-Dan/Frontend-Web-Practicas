import {cargarCatalogo} from "./catalogo.js";
import {pedirTexto, pedirOpcion} from "./entrada.js";
import {disponiblesDe, prestar, estadoDe, multaDe, type Mostrador} from './dominio/prestamos.js';
import {LibroNoEncontradoError, SinEjemplaresError} from "./dominio/tipos.js";

const OPCIONES = [
    {valor: 'prestar', etiqueta: 'Prestar un libro'},
    {valor: 'catalogo', etiqueta: 'Ver catálogo'},
    {valor: 'prestamos', etiqueta: 'Ver préstamos'},
    {valor: 'salir', etiqueta: 'Salir'},
] as const;

type Opcion = (typeof OPCIONES)[number]['valor'];

function esOpcion(valor: string): valor is Opcion {
    return OPCIONES.some((o) => o.valor === valor);
}

const fecha =(d: Date) => d.toISOString().slice(0, 10); //YYYY-MM-DD

function verCatalogo(m: Mostrador): void {
    console.log("\nCatálogo de libros:");
    for (const l of m.libros) {
        const anio = l.anio === undefined ? "s/f" : ` (${l.anio})`;
        console.log(`- ${l.id} ${l.titulo}${anio} de ${l.autor} (${disponiblesDe(m, l)} disponibles)`);
    }

    console.log('');
}

function verPrestamos(m: Mostrador, hoy: Date): void {
    if (m.prestamos.length === 0) {
        console.log("\nNo hay préstamos registrados.\n");
        return;
    }

    console.log("\nPréstamos:");

    for (const p of m.prestamos) {
        const estado = estadoDe(p, hoy);
        const multa = multaDe(p, estado, hoy);
        console.log(`- ${p.folio} ${p.socio} vence en: ${fecha(p.venceEn)}, estado: ${estado}, multa: $${multa}`);
    }
    console.log('');
}

async function hacerPrestamo(m: Mostrador, hoy: Date): Promise<void> {
    const libroId = await pedirTexto("Ingrese el ID del libro a prestar:");

    if (libroId === undefined) {
        return console.log("No se ingresó un ID de libro. Operación cancelada.");
    }

    const socio = await pedirTexto("Ingrese el nombre del socio:");

    if (socio === undefined) {
        return console.log("No se ingresó un nombre de socio. Operación cancelada.");
    }

    try{
        const p = prestar(m, libroId.toUpperCase(), socio, hoy);
        console.log(`\nPréstamo realizado con éxito. Folio: ${p.folio}, vence en ${fecha(p.venceEn)}\n`);
    } catch (error: unknown) {
        if (error instanceof LibroNoEncontradoError || error instanceof SinEjemplaresError) {
            return console.log(`\n  No se pudo: ${error.message}\n`);
        }
    throw error;
    }
}

async function main(): Promise<void> {
    const{libros, descartados} = cargarCatalogo("datos/catalogo.json");
    console.log("\n ---- Mostrador de libros ----\n");
    console.log(`Se cargaron ${libros.length} libros del catálogo. Se descartaron ${descartados} entradas inválidas.\n`);
    const hoy = new Date();
    const m: Mostrador = {libros, prestamos: []};
    
    for(;;) {
        const elegido = await pedirOpcion("Seleccione una opción:", OPCIONES);

        if (elegido === undefined || !esOpcion(elegido)) {
            console.log("Opción inválida. Intente nuevamente.");
            return;
        }

        switch (elegido) {
            case "prestar":
                await hacerPrestamo(m, hoy);
                break;
            case "catalogo":
                verCatalogo(m);
                break;
            case "prestamos":
                verPrestamos(m, hoy);
                break;
            case "salir":
                console.log("Saliendo del programa.");
                return;
            default: {
                const _exhaustiveCheck: never = elegido;
                throw new Error(`Opción no manejada: ${_exhaustiveCheck}`);
            }
        }
    }
}
void main();