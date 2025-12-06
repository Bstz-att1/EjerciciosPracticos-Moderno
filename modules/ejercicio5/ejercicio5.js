export function validarUsuario(nombre, estado, rol) {
    if (estado !== 'activo') {
        return {
            permisos: 'ninguno',
            mensaje: 'Acceso denegado: Usuario inactivo'
        };
    }

    let permisos;
    let mensaje;

    switch (rol) {
        case 'admin':
            permisos = 'lectura, escritura, eliminación';
            mensaje = 'Acceso permitido: Administrador';
            break;
        case 'editor':
            permisos = 'lectura, escritura';
            mensaje = 'Acceso permitido: Editor';
            break;
        case 'lector':
            permisos = 'lectura';
            mensaje = 'Acceso permitido: Lector';
            break;
        default:
            permisos = 'ninguno';
            mensaje = 'Acceso denegado: Rol no válido';
    }

    return {
        permisos: permisos,
        mensaje: mensaje
    };
}
