export function calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida) {
    if (cantidadInicial < 0 || cantidadVendida < 0 || cantidadRecibida < 0) {
        return { inventarioFinal: null, mensaje: "Error: Valores negativos no permitidos" };
    }
    const inventarioFinal = cantidadInicial - cantidadVendida + cantidadRecibida;
    const mensaje = inventarioFinal < 5 ? "Inventario crítico" : "Inventario estable";
    return { inventarioFinal, mensaje };
}
