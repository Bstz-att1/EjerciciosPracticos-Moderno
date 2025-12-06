// Importar la función validarUsuario desde el módulo ejercicio5
import { validarUsuario } from '../modules/ejercicio5/index5.js';

// Función principal para ejecutar el ejercicio
function ejecutarEjercicio5() {
    // Solicitar el nombre del usuario
    const nombre = prompt("Ingrese el nombre del usuario:");

    // Solicitar el estado del usuario
    const estado = prompt("Ingrese el estado del usuario (activo/inactivo):");

    // Solicitar el rol del usuario
    const rol = prompt("Ingrese el rol del usuario (admin/editor/lector):");

    // Validar el usuario usando la función validarUsuario
    const resultado = validarUsuario(nombre, estado, rol);

    // Mostrar el resultado en un alert
    alert(`Usuario: ${nombre}\n${resultado.mensaje}\nPermisos: ${resultado.permisos}`);
}

// Ejecutar el ejercicio cuando se carga la página
ejecutarEjercicio5();
