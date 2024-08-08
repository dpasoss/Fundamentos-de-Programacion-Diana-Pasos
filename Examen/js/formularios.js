'use strict';

window.addEventListener('load', init);

function init() {
    let emailInput = document.getElementById('inscriptionTxt');
    let btnEnviar = document.getElementById('btnSendSuscription');
    let alerta = document.getElementById('mensajeAlertSuscription');
    const expressionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified email regex

    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (!emailInput.value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, ingrese su correo electrónico',
                confirmButtonText: 'Cerrar'
            });
        } else if (!expressionEmail.test(emailInput.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'El correo electrónico ingresado no es válido',
                confirmButtonText: 'Cerrar'
            });
        } else {
            emailjs.sendForm('service_7xvmcss', 'template_zli1s17', '#inscription', 'Yh5Zzyawgwf5Gilqw')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        icon: 'success',
                        title: '¡Enviado!',
                        text: 'Tu suscripción ha sido exitosa.',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    emailInput.value = ''; // Clear input after successful send
                }, function(error) {
                    console.log('FAILED...', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'Hubo un problema enviando tu suscripción. Por favor, intenta nuevamente más tarde.',
                        confirmButtonText: 'Cerrar'
                    });
                });
        }
    });
}
