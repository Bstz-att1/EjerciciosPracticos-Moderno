// Función para calcular el promedio de las calificaciones y determinar el rendimiento
function calcularPromedio(notas) {
    // Verificar si el arreglo de notas está vacío
    if (notas.length === 0) {
        return { promedio: 0, rendimiento: "Sin notas" };
    }

    // Calcular la suma de las notas
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }

    // Calcular el promedio
    const promedio = suma / notas.length;

    // Determinar el rendimiento basado en rangos preestablecidos
    let rendimiento;
    if (promedio >= 8) {
        rendimiento = "Alto";
    } else if (promedio >= 6) {
        rendimiento = "Medio";
    } else {
        rendimiento = "Bajo";
    }

    // Retornar el promedio y el rendimiento
    return { promedio, rendimiento };
}

// Exportar la función para que pueda ser utilizada en otros módulos
export { calcularPromedio };
