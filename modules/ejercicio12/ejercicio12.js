// Función para seleccionar el paciente con mayor prioridad, resolviendo empates por edad
export function seleccionarPaciente(pacientes) {
    // Verificar si hay pacientes en el arreglo
    if (pacientes.length === 0) {
        return null; // Retornar null si no hay pacientes
    }

    // Inicializar el paciente seleccionado con el primero
    let seleccionado = pacientes[0];

    // Iterar sobre los pacientes para encontrar el de mayor prioridad y edad en caso de empate
    for (let paciente of pacientes) {
        // Comparar prioridades y edades
        if (paciente.prioridad > seleccionado.prioridad ||
            (paciente.prioridad === seleccionado.prioridad && paciente.edad > seleccionado.edad)) {
            seleccionado = paciente;
        }
    }

    // Retornar el paciente seleccionado
    return seleccionado;
}
