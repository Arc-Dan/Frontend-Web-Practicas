interface EstadoPrestamo {
    estado: 'activo' | 'devuelto' | 'vencido';
}

interface Prestamo {
    folio: string;
    multa: number;
    ejemplar: number;
    estado: EstadoPrestamo;
    socio?: string;
}

function calcularMulta(prestamo: Prestamo): number {
    const cargoFijo = 50;
    return prestamo.multa + cargoFijo;
}

function recibo(prestamo: Prestamo): string {
    if (prestamo.socio === undefined){
        return `Recibo de socio no registrado`;
    }
    return `Recibo de socio: ${prestamo.socio}`;
}


const prestamo: Prestamo = {
    folio: 'F0023',
    multa: 350,
    ejemplar: 14,
    estado: {estado: 'activo'},
    socio: 'Juan Pérez'
};

console.log(recibo(prestamo), '->', calcularMulta(prestamo));