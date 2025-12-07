// Importar la función fusionarUsuarios desde el módulo ejercicio10
import { fusionarUsuarios } from '../modules/ejercicio10/index10.js';

// Función para fusionar usuarios usando prompts
function fusionarUsuariosApp() {
    // Función auxiliar para solicitar datos de un usuario
    function solicitarUsuario(indice, sistema) {
        // Solicitar documento del usuario
        const documento = prompt(`Ingrese el documento del usuario ${indice} del sistema ${sistema}:`);
        if (documento === null || documento.trim() === "") {
            alert("Documento inválido. Intente de nuevo.");
            return null;
        }

        // Solicitar nombre del usuario
        const nombre = prompt(`Ingrese el nombre del usuario ${indice} del sistema ${sistema}:`);
        if (nombre === null || nombre.trim() === "") {
            alert("Nombre inválido. Intente de nuevo.");
            return null;
        }

        // Solicitar edad del usuario
        const edad = parseInt(prompt(`Ingrese la edad del usuario ${indice} del sistema ${sistema}:`));
        if (isNaN(edad) || edad <= 0) {
            alert("Edad inválida. Intente de nuevo.");
            return null;
        }

        // Retornar el objeto usuario
        return { documento: documento.trim(), nombre: nombre.trim(), edad };
    }

    // Solicitar cantidad de usuarios del sistema A
    const cantidadA = parseInt(prompt("Ingrese la cantidad de usuarios del sistema A:"));

    // Validar cantidad A
    if (isNaN(cantidadA) || cantidadA < 0) {
        alert("Por favor, ingrese un número válido mayor o igual a 0.");
        return;
    }

    // Arreglo para usuarios del sistema A
    const usuariosA = [];

    // Bucle para ingresar usuarios del sistema A
    for (let i = 0; i < cantidadA; i++) {
        const usuario = solicitarUsuario(i + 1, 'A');
        if (usuario === null) {
            i--; // Repetir para este usuario
            continue;
        }
        usuariosA.push(usuario);
    }

    // Solicitar cantidad de usuarios del sistema B
    const cantidadB = parseInt(prompt("Ingrese la cantidad de usuarios del sistema B:"));

    // Validar cantidad B
    if (isNaN(cantidadB) || cantidadB < 0) {
        alert("Por favor, ingrese un número válido mayor o igual a 0.");
        return;
    }

    // Arreglo para usuarios del sistema B
    const usuariosB = [];

    // Bucle para ingresar usuarios del sistema B
    for (let i = 0; i < cantidadB; i++) {
        const usuario = solicitarUsuario(i + 1, 'B');
        if (usuario === null) {
            i--; // Repetir para este usuario
            continue;
        }
        usuariosB.push(usuario);
    }

    // Llamar a la función fusionarUsuarios con los arreglos
    const usuariosFusionados = fusionarUsuarios(usuariosA, usuariosB);

    // Mostrar el resultado en un alert
    if (usuariosFusionados.length > 0) {
        const resultado = usuariosFusionados.map(u => `Documento: ${u.documento}, Nombre: ${u.nombre}, Edad: ${u.edad}`).join('\n');
        alert(`Usuarios fusionados:\n${resultado}`);
    } else {
        alert("No hay usuarios para fusionar.");
    }
}

// Ejecutar la función al cargar la página
fusionarUsuariosApp();
