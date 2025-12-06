import { calcularInventario } from '../modules/ejercicio2/index2.js';

const cantidadInicial = parseInt(prompt('Ingrese la cantidad inicial:'));
const cantidadVendida = parseInt(prompt('Ingrese la cantidad vendida:'));
const cantidadRecibida = parseInt(prompt('Ingrese la cantidad recibida:'));

const resultado = calcularInventario(cantidadInicial, cantidadVendida, cantidadRecibida);
if (resultado.inventarioFinal === null) {
    alert(resultado.mensaje);
    console.log(resultado.mensaje);
} else {
    const mensaje = `Inventario final: ${resultado.inventarioFinal}. ${resultado.mensaje}`;
    alert(mensaje);
    console.log(mensaje);
}
