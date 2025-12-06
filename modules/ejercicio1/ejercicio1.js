// Función para validar la asistencia de un aprendiz en un curso
// Recibe un arreglo de nombres de aprendices inscritos y el nombre a validar
// Utiliza el método includes() para buscar el nombre en el arreglo
// Retorna un mensaje indicando si el aprendiz está inscrito o no
function validarAsistencia(aprendices, nombreValidar) {
    // Verificar si el nombre está en el arreglo de aprendices
    if (aprendices.includes(nombreValidar)) {
        return "El aprendiz está inscrito";
    } else {
        return "El aprendiz no está inscrito";
    }
}

// Exportar la función para que pueda ser utilizada en otros módulos
export { validarAsistencia };
