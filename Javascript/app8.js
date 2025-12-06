// Importar la función registrarProductos desde el módulo ejercicio7
import { registrarProductos } from '../modules/ejercicio7/index7.js';

// Función para registrar productos usando prompts
function registrarProductosApp() {
    // Arreglo para almacenar los productos ingresados por el usuario
    const productos = [];

    // Bucle para solicitar productos hasta que el usuario cancele
    while (true) {
        // Solicitar el nombre del producto mediante prompt
        const producto = prompt("Ingrese el nombre del producto (o cancele para finalizar):");

        // Si el usuario cancela, salir del bucle
        if (producto === null) {
            break;
        }

        // Agregar el producto al arreglo si no está vacío
        if (producto.trim() !== "") {
            productos.push(producto.trim());
        } else {
            alert("Por favor, ingrese un nombre de producto válido.");
        }
    }

    // Llamar a la función registrarProductos con los productos ingresados
    const productosUnicos = registrarProductos(...productos);

    // Mostrar el resultado en un alert
    alert(`Productos registrados sin duplicados: ${productosUnicos.join(', ')}`);
}

// Ejecutar la función al cargar la página
registrarProductosApp();
