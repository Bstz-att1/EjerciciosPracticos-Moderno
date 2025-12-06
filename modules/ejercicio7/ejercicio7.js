// Función para registrar productos sin duplicados usando parámetros rest
// Recibe un número indefinido de nombres de productos
// Utiliza un Set para evitar duplicados y retorna un arreglo único
function registrarProductos(...productos) {
    // Crear un Set para almacenar productos únicos
    const productosUnicos = new Set(productos);
    // Convertir el Set a un arreglo y retornarlo
    return Array.from(productosUnicos);
}

// Exportar la función para que pueda ser utilizada en otros módulos
export { registrarProductos };
