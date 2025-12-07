// Función para fusionar listas de usuarios usando operador spread
// Recibe dos arreglos de usuarios y retorna una lista depurada sin duplicados por documento
function fusionarUsuarios(usuariosA, usuariosB) {
    // Combinar los arreglos usando operador spread
    const usuariosCombinados = [...usuariosA, ...usuariosB];

    // Mapa para almacenar usuarios únicos por documento
    const mapaUsuarios = new Map();

    // Iterar sobre los usuarios combinados
    for (const usuario of usuariosCombinados) {
        // Obtener el documento del usuario
        const documento = usuario.documento;

        // Verificar si el documento ya existe en el mapa
        if (mapaUsuarios.has(documento)) {
            // Obtener el usuario existente
            const usuarioExistente = mapaUsuarios.get(documento);

            // Contar las propiedades de cada usuario
            const propiedadesExistente = Object.keys(usuarioExistente).length;
            const propiedadesNuevo = Object.keys(usuario).length;

            // Conservar el usuario con mayor información (más propiedades)
            if (propiedadesNuevo > propiedadesExistente) {
                mapaUsuarios.set(documento, usuario);
            }
        } else {
            // Agregar el usuario al mapa si no existe
            mapaUsuarios.set(documento, usuario);
        }
    }

    // Retornar la lista depurada como arreglo
    return Array.from(mapaUsuarios.values());
}

// Exportar la función para que pueda ser utilizada en otros módulos
export { fusionarUsuarios };
