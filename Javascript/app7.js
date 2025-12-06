import { calcularSalarioBase, calcularDeducciones, calcularNeto } from '../modules/ejercicio6/index6.js';

function calcularNomina() {
    const valorHora = parseFloat(prompt("Ingrese el valor de la hora:"));
    const horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas:"));

    if (isNaN(valorHora) || isNaN(horasTrabajadas)) {
        alert("Por favor, ingrese valores numéricos válidos.");
        return;
    }

    const salarioBase = calcularSalarioBase(valorHora, horasTrabajadas);
    const deducciones = calcularDeducciones(salarioBase);
    const salarioNeto = calcularNeto(salarioBase, deducciones);

    alert(`Salario Base: ${salarioBase}\nTotal Deducciones: ${deducciones}\nSalario Neto: ${salarioNeto}`);
}

// Ejecutar la función al cargar la página
calcularNomina();
