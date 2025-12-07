// Función para procesar pagos mediante callbacks
// Recibe un arreglo de pagos y un callback que define las reglas de aprobación
function procesarPagos(pagos, callback) {
    // Arreglo para almacenar los pagos procesados
    const pagosProcesados = [];

    // Iterar sobre cada pago
    for (const pago of pagos) {
        // Aplicar el callback para determinar si está aprobado
        const aprobado = callback(pago);

        // Marcar el pago como aprobado o rechazado
        const pagoMarcado = {
            ...pago,
            estado: aprobado ? 'aprobado' : 'rechazado'
        };

        // Agregar el pago marcado al arreglo
        pagosProcesados.push(pagoMarcado);
    }

    // Retornar el listado final de pagos procesados
    return pagosProcesados;
}

// Exportar la función para que pueda ser utilizada en otros módulos
export { procesarPagos };
