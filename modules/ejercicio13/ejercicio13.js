// Función para analizar gastos y generar reporte financiero
export function analizarGastos(gastos) {
    // Declarar variables para total, categoría más costosa y alertas
    let totalGastado = 0;
    let categoriaMasCostosa = '';
    let maxMonto = 0;
    let alertas = [];

    // Objeto para sumar montos por categoría
    const sumaPorCategoria = {};

    // Iterar sobre los gastos para calcular totales y sumas por categoría
    for (let gasto of gastos) {
        totalGastado += gasto.monto; // Sumar al total gastado

        // Sumar monto por categoría
        if (sumaPorCategoria[gasto.categoria]) {
            sumaPorCategoria[gasto.categoria] += gasto.monto;
        } else {
            sumaPorCategoria[gasto.categoria] = gasto.monto;
        }
    }

    // Encontrar la categoría más costosa
    for (let categoria in sumaPorCategoria) {
        if (sumaPorCategoria[categoria] > maxMonto) {
            maxMonto = sumaPorCategoria[categoria];
            categoriaMasCostosa = categoria;
        }
    }

    // Verificar alertas de desbalance (categoría > 40% del total)
    for (let categoria in sumaPorCategoria) {
        const porcentaje = (sumaPorCategoria[categoria] / totalGastado) * 100;
        if (porcentaje > 40) {
            alertas.push(`Alerta: La categoría '${categoria}' supera el 40% del gasto total (${porcentaje.toFixed(2)}%).`);
        }
    }

    // Retornar el reporte financiero
    return {
        totalGastado: totalGastado,
        categoriaMasCostosa: categoriaMasCostosa,
        alertas: alertas
    };
}
