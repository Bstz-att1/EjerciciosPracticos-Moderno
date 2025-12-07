// Importar la función procesarPagos desde el módulo ejercicio8
import { procesarPagos } from '../modules/ejercicio9/index9.js';

// Función para procesar pagos usando prompts
function procesarPagosApp() {
    // Solicitar la cantidad de pagos
    const cantidadPagos = parseInt(prompt("Ingrese la cantidad de pagos:"));

    // Validar que sea un número válido
    if (isNaN(cantidadPagos) || cantidadPagos <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
        return;
    }

    // Arreglo para almacenar los pagos
    const pagos = [];

    // Bucle para solicitar datos de cada pago
    for (let i = 0; i < cantidadPagos; i++) {
        // Solicitar ID del pago
        const id = prompt(`Ingrese el ID del pago ${i + 1}:`);

        // Solicitar monto del pago
        const monto = parseFloat(prompt(`Ingrese el monto del pago ${i + 1}:`));

        // Validar que el monto sea un número válido
        if (isNaN(monto) || monto <= 0) {
            alert("Por favor, ingrese un monto válido mayor a 0.");
            return;
        }

        // Agregar el pago al arreglo
        pagos.push({ id, monto });
    }

    // Solicitar el umbral de aprobación (monto mínimo)
    const umbral = parseFloat(prompt("Ingrese el monto mínimo para aprobar el pago:"));

    // Validar que el umbral sea un número válido
    if (isNaN(umbral) || umbral < 0) {
        alert("Por favor, ingrese un umbral válido mayor o igual a 0.");
        return;
    }

    // Definir el callback que verifica si el pago cumple con el umbral
    const callbackAprobacion = (pago) => pago.monto >= umbral;

    // Llamar a la función procesarPagos con los pagos y el callback
    const pagosProcesados = procesarPagos(pagos, callbackAprobacion);

    // Separar pagos aprobados y rechazados
    const aprobados = pagosProcesados.filter(p => p.estado === 'aprobado');
    const rechazados = pagosProcesados.filter(p => p.estado === 'rechazado');

    // Mostrar el resultado en un alert
    alert(`Pagos aprobados: ${aprobados.length}\n${aprobados.map(p => `ID: ${p.id}, Monto: ${p.monto}`).join('\n')}\n\nPagos rechazados: ${rechazados.length}\n${rechazados.map(p => `ID: ${p.id}, Monto: ${p.monto}`).join('\n')}`);
}

// Ejecutar la función al cargar la página
procesarPagosApp();
