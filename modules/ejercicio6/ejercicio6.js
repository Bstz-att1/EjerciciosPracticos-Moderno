// Módulo para el cálculo modular de nómina
// Contiene funciones para calcular salario base, deducciones y salario neto

/**
 * Calcula el salario base multiplicando el valor por hora por las horas trabajadas.
 * @param {number} valorHora - El valor monetario por hora trabajada.
 * @param {number} horasTrabajadas - El número de horas trabajadas.
 * @returns {number} El salario base calculado.
 */
export function calcularSalarioBase(valorHora, horasTrabajadas) {
    return valorHora * horasTrabajadas;
}

/**
 * Calcula las deducciones aplicando un porcentaje fijo al salario base.
 * En este caso, se asume un 10% de deducciones.
 * @param {number} salarioBase - El salario base calculado.
 * @returns {number} El total de deducciones.
 */
export function calcularDeducciones(salarioBase) {
    // Asumiendo deducciones del 10% del salario base
    return salarioBase * 0.10;
}

/**
 * Calcula el salario neto restando las deducciones del salario base.
 * @param {number} salarioBase - El salario base calculado.
 * @param {number} deducciones - El total de deducciones.
 * @returns {number} El salario neto.
 */
export function calcularNeto(salarioBase, deducciones) {
    return salarioBase - deducciones;
}
