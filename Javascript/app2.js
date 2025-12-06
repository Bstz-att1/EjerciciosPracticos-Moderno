// Importar la función validarAsistencia desde el módulo ejercicio1
import { validarAsistencia } from '../modules/ejercicio1/index.js';

// Función principal para ejecutar el ejercicio 1: Validación de asistencia
function ejecutarEjercicio1() {
    // Pedir la cantidad de aprendices usando prompt
    let cantidadAprendices = parseInt(prompt("Ingrese la cantidad de aprendices:"));

    // Validar que la cantidad sea un número positivo
    if (isNaN(cantidadAprendices) || cantidadAprendices <= 0) {
        alert("La cantidad de aprendices debe ser un número positivo.");
        return;
    }

    // Crear un arreglo para almacenar los nombres de los aprendices
    let aprendices = [];

    // Pedir los nombres de los aprendices usando prompt
    for (let i = 0; i < cantidadAprendices; i++) {
        let nombre = prompt(`Ingrese el nombre del aprendiz ${i + 1}:`);
        if (nombre) {
            aprendices.push(nombre);
        } else {
            alert("El nombre no puede estar vacío.");
            i--; // Repetir la iteración si el nombre está vacío
        }
    }

    // Pedir el nombre a validar usando prompt
    let nombreValidar = prompt("Ingrese el nombre del aprendiz a validar:");

    // Validar que el nombre a validar no esté vacío
    if (!nombreValidar) {
        alert("El nombre a validar no puede estar vacío.");
        return;
    }

    // Llamar a la función validarAsistencia y mostrar el resultado usando alert
    let resultado = validarAsistencia(aprendices, nombreValidar);
    alert(resultado);
}

// Ejecutar el ejercicio cuando se carga la página (opcional, si se quiere automático)
ejecutarEjercicio1();


