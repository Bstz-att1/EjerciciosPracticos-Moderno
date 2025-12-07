// Función para generar un resumen de un mensaje usando destructuración
export function generarResumen(mensaje) {
    // Usar destructuración para extraer remitente, contenido y fecha del objeto mensaje
    const { remitente, contenido, fecha } = mensaje;

    // Crear el resumen construido con la información extraída
    const resumen = `Remitente: ${remitente}, Contenido breve: ${contenido.substring(0, 50)}..., Fecha: ${fecha}`;

    // Retornar el resumen
    return resumen;
}
