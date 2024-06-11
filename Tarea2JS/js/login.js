console.log("login.js se ha cargado correctamente.");

document.getElementById('btn-login').addEventListener('click', function() {
    console.log("Botón de login clicado.");

    var username = document.getElementById('in-txt-user').value;
    var password = document.getElementById('in-txt-pass').value;

    console.log("Usuario:", username);
    console.log("Contraseña:", password);

    if (username === '' || password === '') {
        // Campos vacíos
        Swal.fire({
            icon: 'warning',
            title: 'Campos Vacíos',
            text: 'Por favor, complete todos los campos.',
        });
    } else if (username === 'cenfo' && password === '123') {
        // Login exitoso
        Swal.fire({
            icon: 'success',
            title: 'Login Exitoso',
            text: '¡Bienvenido!',
        }).then(function() {
            // Redirigir a otra página después del login exitoso
            window.location.href = 'homepage.html'; // Cambia esto a la URL de la página de inicio
        });
    } else {
        // Login fallido
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario o contraseña incorrectos',
        });
    }
});

