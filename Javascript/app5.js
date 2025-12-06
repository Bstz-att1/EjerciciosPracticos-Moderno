// Importar la función ordenarPrecios desde el módulo ejercicio4
import { ordenarPrecios } from '../modules/ejercicio4/index4.js';

// Función principal para ejecutar el ejercicio
function ejecutarEjercicio4() {
    // Solicitar la cantidad de precios al usuario
    const cantidadPrecios = parseInt(prompt("Ingrese la cantidad de precios:"));

    // Verificar si la cantidad es válida
    if (isNaN(cantidadPrecios) || cantidadPrecios <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
        return;
    }

    // Crear un arreglo para almacenar los precios
    const precios = [];

    // Solicitar cada precio al usuario
    for (let i = 0; i < cantidadPrecios; i++) {
        const precio = parseFloat(prompt(`Ingrese el precio ${i + 1}:`));
        // Verificar si el precio es un número válido
        if (isNaN(precio)) {
            alert("Por favor, ingrese un precio válido.");
            return;
        }
        precios.push(precio);
    }

    // Ordenar los precios y obtener los extremos usando la función ordenarPrecios
    const resultado = ordenarPrecios(precios);

    // Mostrar el resultado en un alert
    alert(`Arreglo ordenado: ${resultado.arregloOrdenado.join(', ')}\nPrecio más alto: ${resultado.precioMasAlto}\nPrecio más bajo: ${resultado.precioMasBajo}`);
}

// Ejecutar el ejercicio cuando se carga la página
ejecutarEjercicio4();
