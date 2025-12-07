// Importar la función buscarCursos desde el módulo ejercicio8
import { buscarCursos } from '../modules/ejercicio8/index8.js';

// Función para buscar cursos usando prompts
function buscarCursosApp() {
    // Arreglo para almacenar el catálogo de cursos
    const catalogo = [];

    // Solicitar la cantidad de cursos
    const cantidadCursos = parseInt(prompt("Ingrese la cantidad de cursos:"));

    // Validar la cantidad
    if (isNaN(cantidadCursos) || cantidadCursos <= 0) {
        alert("Por favor, ingrese un número válido mayor a 0.");
        return;
    }

    // Bucle para ingresar datos de cada curso
    for (let i = 0; i < cantidadCursos; i++) {
        // Solicitar nombre del curso
        const nombre = prompt(`Ingrese el nombre del curso ${i + 1}:`);
        if (nombre === null || nombre.trim() === "") {
            alert("Nombre inválido. Intente de nuevo.");
            i--; // Repetir para este curso
            continue;
        }

        // Solicitar categoría del curso
        const categoria = prompt(`Ingrese la categoría del curso ${i + 1}:`);
        if (categoria === null || categoria.trim() === "") {
            alert("Categoría inválida. Intente de nuevo.");
            i--; // Repetir para este curso
            continue;
        }

        // Solicitar duración del curso
        const duracion = parseInt(prompt(`Ingrese la duración en horas del curso ${i + 1}:`));
        if (isNaN(duracion) || duracion <= 0) {
            alert("Duración inválida. Intente de nuevo.");
            i--; // Repetir para este curso
            continue;
        }

        // Agregar el curso al catálogo
        catalogo.push({ nombre: nombre.trim(), categoria: categoria.trim(), duracion });
    }

    // Solicitar el criterio de búsqueda
    const criterio = prompt("Seleccione el criterio de búsqueda:\n1. Categoría\n2. Duración\n3. Nombre");

    let callback;
    let valorBusqueda;

    // Definir el callback según el criterio
    switch (criterio) {
        case '1':
            // Búsqueda por categoría
            valorBusqueda = prompt("Ingrese la categoría a buscar:");
            if (valorBusqueda === null || valorBusqueda.trim() === "") {
                alert("Categoría inválida.");
                return;
            }
            callback = (curso) => curso.categoria.toLowerCase().includes(valorBusqueda.toLowerCase());
            break;
        case '2':
            // Búsqueda por duración
            valorBusqueda = parseInt(prompt("Ingrese la duración mínima en horas:"));
            if (isNaN(valorBusqueda) || valorBusqueda < 0) {
                alert("Duración inválida.");
                return;
            }
            callback = (curso) => curso.duracion >= valorBusqueda;
            break;
        case '3':
            // Búsqueda por nombre
            valorBusqueda = prompt("Ingrese el nombre o parte del nombre a buscar:");
            if (valorBusqueda === null || valorBusqueda.trim() === "") {
                alert("Nombre inválido.");
                return;
            }
            callback = (curso) => curso.nombre.toLowerCase().includes(valorBusqueda.toLowerCase());
            break;
        default:
            alert("Criterio inválido.");
            return;
    }

    // Llamar a la función buscarCursos con el catálogo y el callback
    const cursosEncontrados = buscarCursos(catalogo, callback);

    // Mostrar el resultado en un alert
    if (cursosEncontrados.length > 0) {
        const resultado = cursosEncontrados.map(curso => `${curso.nombre} (${curso.categoria}, ${curso.duracion}h)`).join('\n');
        alert(`Cursos encontrados:\n${resultado}`);
    } else {
        alert("No se encontraron cursos que coincidan con el criterio.");
    }
}

// Ejecutar la función al cargar la página
buscarCursosApp();