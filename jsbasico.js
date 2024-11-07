// ALTERTA BUSCAR
document.getElementById('searchForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evitar el envío del formulario
    // Obtener el valor ingresado en el input de búsqueda
    var searchText = document.getElementById('searchInput').value;
    Swal.fire({
        title: 'Usted Buscó:',
        text: searchText ? searchText : 'No se ingresó texto',
        icon: 'info',
        confirmButtonText: 'Aceptar',
        background: '#14181D',
        color: '#fff',
    });
});

// ALERTA INICIAR SESION
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        showConfirmButton: false,
        timer: 1500,
        background: '#14181D',
        color: '#fff'
    });

    // Opcional: Cerrar el modal después de la alerta (cuando la alerta desaparezca)
    setTimeout(function () {
        var loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.hide();
    }, 1500); // Cierra el modal después de 1.5 segundos (lo mismo que dura la alerta)
});

// ALERTA OLVIDE MI CONTRASEÑA
document.getElementById('forgotPasswordLink').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del enlace
    Swal.fire({
        position: 'center',
        icon: 'warning',
        title: '¡NO OLVIDES TU CONTRASEÑA!',
        showConfirmButton: false,
        timer: 1500,
        background: '#14181D',
        color: '#fff'
    });
});

// ALERTA REGISTRARSE
document.getElementById('registerButton').addEventListener('click', function (event) {
    event.preventDefault(); // Evita el comportamiento por defecto del botón
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No es posible registrarse en este momento!',
        background: '#14181D',
        color: '#fff',
        position: 'center'
    });
});