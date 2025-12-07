// Importar la función del módulo ejercicio15
import { generarRecomendaciones } from '../modules/ejercicio15/index15.js';

// Función principal para ejecutar el ejercicio
function ejecutarEjercicio() {
    // Solicitar al usuario la cantidad de cursos completados
    const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos completados:"));

    // Validar que sea un número válido
    if (isNaN(cantidadCursos) || cantidadCursos <= 0) {
        alert("Por favor, ingrese un número válido de cursos.");
        return;
    }

    // Array para almacenar los cursos
    const cursos = [];

    // Solicitar datos para cada curso
    for (let i = 0; i < cantidadCursos; i++) {
        // Solicitar nombre del curso
        const nombre = prompt(`Ingrese el nombre del curso ${i + 1}:`);

        // Solicitar calificación final
        const calificacion = parseFloat(prompt(`Ingrese la calificación final del curso "${nombre}" (0-10):`));

        // Solicitar horas dedicadas
        const horas = parseInt(prompt(`Ingrese las horas dedicadas al curso "${nombre}":`));

        // Solicitar número de intentos
        const intentos = parseInt(prompt(`Ingrese el número de intentos para el curso "${nombre}":`));

        // Solicitar si fue finalizado (true/false)
        const finalizadoInput = prompt(`¿El curso "${nombre}" fue finalizado? (true/false):`);
        const finalizado = finalizadoInput.toLowerCase() === 'true';

        // Crear objeto del curso
        const curso = {
            nombre: nombre,
            calificacion: calificacion,
            horas: horas,
            intentos: intentos,
            finalizado: finalizado
        };

        // Agregar curso al array
        cursos.push(curso);
    }

    // Definir el callback para recomendación (ejemplo: reforzar cursos con calificación baja < 6)
    const callbackRecomendacion = (curso) => {
        if (curso.calificacion < 6) {
            return 10 - curso.calificacion; // Prioridad basada en lo baja que fue la calificación
        }
        return 0; // No recomendado
    };

    // Generar las recomendaciones usando la función del módulo
    const recomendaciones = generarRecomendaciones(cursos, callbackRecomendacion);

    // Mostrar resultados en alertas
    if (recomendaciones.length === 0) {
        alert("No hay cursos recomendados según el criterio definido.");
    } else {
        // Lista de cursos recomendados
        alert(`Cursos recomendados (ordenados por prioridad): ${recomendaciones.map(c => c.nombre).join(', ')}`);

        // Detalles de cada recomendación
        recomendaciones.forEach(rec => {
            alert(`Curso recomendado: ${rec.nombre}\nCalificación: ${rec.calificacion}\nHoras dedicadas: ${rec.horas}\nIntentos: ${rec.intentos}\nFinalizado: ${rec.finalizado}\nPrioridad: ${rec.prioridad}\nRazón: Calificación baja, requiere refuerzo.`);
        });
    }
}

// Ejecutar el ejercicio al cargar el script
ejecutarEjercicio();
