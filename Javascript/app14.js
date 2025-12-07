// Importar la función analizarGastos desde el módulo ejercicio13
import { analizarGastos } from '../modules/ejercicio13/index13.js';

// Función principal para analizar gastos usando prompts
function analizarGastosApp() {
    // Solicitar cantidad de gastos
    const cantidad = parseInt(prompt("Ingrese la cantidad de gastos:"));
    if (isNaN(cantidad) || cantidad <= 0) {
        alert("Cantidad inválida. Debe ser un número mayor a 0.");
        return;
    }

    // Crear arreglo de gastos
    const gastos = [];

    // Solicitar datos de cada gasto
    for (let i = 0; i < cantidad; i++) {
        // Solicitar categoría del gasto
        const categoria = prompt(`Ingrese la categoría del gasto ${i + 1}:`);
        if (categoria === null || categoria.trim() === "") {
            alert("Categoría inválida. Intente de nuevo.");
            return;
        }

        // Solicitar monto del gasto
        const monto = parseFloat(prompt(`Ingrese el monto del gasto ${i + 1}:`));
        if (isNaN(monto) || monto <= 0) {
            alert("Monto inválido. Debe ser un número mayor a 0.");
            return;
        }

        // Crear objeto gasto y agregarlo al arreglo
        const gasto = {
            categoria: categoria.trim(),
            monto: monto
        };
        gastos.push(gasto);
    }

    // Llamar a la función analizarGastos con el arreglo de gastos
    const reporte = analizarGastos(gastos);

    // Mostrar el reporte en un alert
    let mensaje = `Total gastado: $${reporte.totalGastado.toFixed(2)}\n`;
    mensaje += `Categoría más costosa: ${reporte.categoriaMasCostosa}\n`;
    if (reporte.alertas.length > 0) {
        mensaje += "Alertas:\n" + reporte.alertas.join("\n");
    } else {
        mensaje += "No hay alertas de desbalance.";
    }
    alert(mensaje);
}

// Ejecutar la función al cargar la página
analizarGastosApp();
