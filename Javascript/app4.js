// Importar la función calcularPromedio desde el módulo ejercicio3
import { calcularPromedio } from '../modules/ejercicio3/index3.js';

// Función principal para ejecutar el ejercicio
function ejecutarEjercicio3() {
    // Solicitar la cantidad de notas al usuario
    const cantidadNotas = parseInt(prompt("Ingrese la cantidad de notas:"));

    // Verificar si la cantidad es válida
    if (isNaN(cantidadNotas) || cantidadNotas <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
        return;
    }

    // Crear un arreglo para almacenar las notas
    const notas = [];

    // Solicitar cada nota al usuario
    for (let i = 0; i < cantidadNotas; i++) {
        const nota = parseFloat(prompt(`Ingrese la nota ${i + 1}:`));
        // Verificar si la nota es un número válido
        if (isNaN(nota)) {
            alert("Por favor, ingrese una nota válida.");
            return;
        }
        notas.push(nota);
    }

    // Calcular el promedio y el rendimiento usando la función calcularPromedio
    const resultado = calcularPromedio(notas);

    // Mostrar el resultado en un alert
    alert(`Promedio final: ${resultado.promedio.toFixed(2)}\nCategoría de rendimiento: ${resultado.rendimiento}`);
}

// Ejecutar el ejercicio cuando se carga la página
ejecutarEjercicio3();
