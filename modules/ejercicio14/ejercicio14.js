// Función para filtrar proyectos activos
export function filtrarActivos(proyectos) {
    // Filtrar proyectos donde el campo 'activo' sea true
    return proyectos.filter(proyecto => proyecto.activo);
}

// Función para contar participantes en un proyecto
export function contarParticipantes(proyecto) {
    // Retornar la longitud del array de participantes
    return proyecto.participantes.length;
}

// Función para evaluar un proyecto usando un callback
export function evaluarProyecto(proyecto, callback) {
    // Llamar al callback con el proyecto y retornar el resultado
    return callback(proyecto);
}

// Función principal para generar el informe de proyectos
export function generarInforme(proyectos, callback) {
    // Obtener lista de proyectos activos
    const proyectosActivos = filtrarActivos(proyectos);

    // Crear array de informes por proyecto
    const informes = proyectos.map(proyecto => {
        const isActive = proyecto.activo;
        const participantCount = contarParticipantes(proyecto);
        const needsReinforcement = evaluarProyecto(proyecto, callback);

        return {
            nombre: proyecto.nombre,
            activo: isActive,
            participantes: participantCount,
            requiereRefuerzo: needsReinforcement
        };
    });

    // Retornar el informe completo
    return {
        proyectosActivos: proyectosActivos.map(p => p.nombre),
        informes: informes
    };
}
