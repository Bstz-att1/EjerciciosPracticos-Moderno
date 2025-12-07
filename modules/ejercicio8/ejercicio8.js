// Función buscarCursos que filtra cursos usando un callback
export function buscarCursos(catalogo, callback) {
    // Aplicar filter() con el callback para filtrar los cursos
    return catalogo.filter(callback);
}
