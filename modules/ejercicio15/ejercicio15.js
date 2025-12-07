// Función para generar recomendaciones de cursos
export function generarRecomendaciones(cursos, callback) {
    // Aplicar el callback a cada curso para obtener la prioridad
    const conPrioridad = cursos.map(curso => ({
        ...curso,
        prioridad: callback(curso)
    }));

    // Filtrar cursos con prioridad mayor a cero
    const filtrados = conPrioridad.filter(curso => curso.prioridad > 0);

    // Ordenar de mayor a menor prioridad
    const ordenados = filtrados.sort((a, b) => b.prioridad - a.prioridad);

    // Retornar la lista final de recomendaciones
    return ordenados;
}
