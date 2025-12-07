// Importar la función generarResumen desde el módulo ejercicio11
import { generarResumen } from '../modules/ejercicio11/index11.js';

// Función principal para generar resumen de mensaje usando prompts
function generarResumenApp() {
    // Solicitar remitente del mensaje
    const remitente = prompt("Ingrese el remitente del mensaje:");
    if (remitente === null || remitente.trim() === "") {
        alert("Remitente inválido. Intente de nuevo.");
        return;
    }

    // Solicitar contenido del mensaje
    const contenido = prompt("Ingrese el contenido del mensaje:");
    if (contenido === null || contenido.trim() === "") {
        alert("Contenido inválido. Intente de nuevo.");
        return;
    }

    // Solicitar fecha del mensaje
    const fecha = prompt("Ingrese la fecha del mensaje (ejemplo: 2023-10-01):");
    if (fecha === null || fecha.trim() === "") {
        alert("Fecha inválida. Intente de nuevo.");
        return;
    }

    // Crear el objeto mensaje con los datos ingresados
    const mensaje = {
        remitente: remitente.trim(),
        contenido: contenido.trim(),
        fecha: fecha.trim()
    };

    // Llamar a la función generarResumen con el objeto mensaje
    const resumen = generarResumen(mensaje);

    // Mostrar el resumen en un alert
    alert(`Resumen del mensaje:\n${resumen}`);
}

// Ejecutar la función al cargar la página
generarResumenApp();
