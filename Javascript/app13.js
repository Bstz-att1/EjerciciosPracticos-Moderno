// Importar la función seleccionarPaciente desde el módulo ejercicio12
import { seleccionarPaciente } from '../modules/ejercicio12/index12.js';

// Función principal para seleccionar paciente con mayor prioridad usando prompts
function seleccionarPacienteApp() {
    // Solicitar cantidad de pacientes
    const cantidad = parseInt(prompt("Ingrese la cantidad de pacientes:"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida. Debe ser un número mayor a 0.");
        return;
    }

    // Crear arreglo de pacientes
    const pacientes = [];

    // Solicitar datos de cada paciente
    for (let i = 0; i < cantidad; i++) {
        // Solicitar nombre del paciente
        const nombre = prompt(`Ingrese el nombre del paciente ${i + 1}:`);
        if (nombre === null || nombre.trim() === "") {
            alert("Nombre inválido. Intente de nuevo.");
            return;
        }

        // Solicitar prioridad del paciente
        const prioridad = parseInt(prompt(`Ingrese la prioridad del paciente ${i + 1} (número mayor es mayor prioridad):`));
        if (isNaN(prioridad)) {
            alert("Prioridad inválida. Debe ser un número.");
            return;
        }

        // Solicitar edad del paciente
        const edad = parseInt(prompt(`Ingrese la edad del paciente ${i + 1}:`));
        if (isNaN(edad) || edad <= 0) {
            alert("Edad inválida. Debe ser un número mayor a 0.");
            return;
        }

        // Crear objeto paciente y agregarlo al arreglo
        const paciente = {
            nombre: nombre.trim(),
            prioridad: prioridad,
            edad: edad
        };
        pacientes.push(paciente);
    }

    // Llamar a la función seleccionarPaciente con el arreglo de pacientes
    const pacienteSeleccionado = seleccionarPaciente(pacientes);

    // Mostrar el paciente seleccionado en un alert
    if (pacienteSeleccionado) {
        alert(`Paciente seleccionado:\nNombre: ${pacienteSeleccionado.nombre}\nPrioridad: ${pacienteSeleccionado.prioridad}\nEdad: ${pacienteSeleccionado.edad}`);
    } else {
        alert("No hay pacientes para seleccionar.");
    }
}

// Ejecutar la función al cargar la página
seleccionarPacienteApp();
