// Importar las funciones del módulo ejercicio14
import { generarInforme } from '../modules/ejercicio14/index14.js';

// Función principal para ejecutar el ejercicio
function ejecutarEjercicio() {
    // Solicitar al usuario la cantidad de proyectos
    const cantidadProyectos = parseInt(prompt("Ingrese la cantidad de proyectos:"));

    // Validar que sea un número válido
    if (isNaN(cantidadProyectos) || cantidadProyectos <= 0) {
        alert("Por favor, ingrese un número válido de proyectos.");
        return;
    }

    // Array para almacenar los proyectos
    const proyectos = [];

    // Solicitar datos para cada proyecto
    for (let i = 0; i < cantidadProyectos; i++) {
        // Solicitar nombre del proyecto
        const nombre = prompt(`Ingrese el nombre del proyecto ${i + 1}:`);

        // Solicitar si el proyecto está activo (true/false)
        const activoInput = prompt(`¿El proyecto "${nombre}" está activo? (true/false):`);
        const activo = activoInput.toLowerCase() === 'true';

        // Solicitar participantes separados por comas
        const participantesInput = prompt(`Ingrese los participantes del proyecto "${nombre}" separados por comas:`);
        const participantes = participantesInput.split(',').map(p => p.trim());

        // Crear objeto del proyecto
        const proyecto = {
            nombre: nombre,
            activo: activo,
            participantes: participantes
        };

        // Agregar proyecto al array
        proyectos.push(proyecto);
    }

    // Definir el callback para evaluar si requiere refuerzo (ejemplo: si tiene menos de 5 participantes)
    const callbackEvaluacion = (proyecto) => {
        return proyecto.participantes.length < 5;
    };

    // Generar el informe usando la función del módulo
    const informe = generarInforme(proyectos, callbackEvaluacion);

    // Mostrar resultados en alertas
    // Lista de proyectos activos
    alert(`Proyectos activos: ${informe.proyectosActivos.join(', ')}`);

    // Informes por proyecto
    informe.informes.forEach(inf => {
        alert(`Proyecto: ${inf.nombre}\nActivo: ${inf.activo}\nParticipantes: ${inf.participantes}\nRequiere refuerzo: ${inf.requiereRefuerzo}`);
    });
}

// Ejecutar el ejercicio al cargar el script
ejecutarEjercicio();
