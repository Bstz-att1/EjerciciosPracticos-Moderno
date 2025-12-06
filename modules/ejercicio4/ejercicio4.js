// Función para ordenar precios de productos de mayor a menor y determinar extremos
function ordenarPrecios(precios) {
    // Verificar si el arreglo de precios está vacío
    if (precios.length === 0) {
        return { arregloOrdenado: [], precioMasAlto: null, precioMasBajo: null };
    }

    // Ordenar el arreglo de mayor a menor usando sort()
    const arregloOrdenado = precios.slice().sort((a, b) => b - a);

    // Determinar el precio más alto y más bajo
    const precioMasAlto = Math.max(...precios);
    const precioMasBajo = Math.min(...precios);

    // Retornar el arreglo ordenado y los valores extremos
    return { arregloOrdenado, precioMasAlto, precioMasBajo };
}

// Exportar la función para que pueda ser utilizada en otros módulos
export { ordenarPrecios };
