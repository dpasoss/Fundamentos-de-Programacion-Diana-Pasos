'use strict';

window.addEventListener('load', init);

function init() {
    let form = document.getElementById('form');
    let nombre = document.getElementById('nombreTxt');
    let apellido = document.getElementById('apellidoTxt');
    let email = document.getElementById('emailTxt');
    let numero = document.getElementById('numberTxt');
    let mensaje = document.getElementById('mensajeTxt');
    let btnEnviar = document.getElementById('btnSend');
    let expressionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    btnEnviar.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default form submission

        if (!nombre.value || !apellido.value || !email.value || !numero.value || !mensaje.value) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debe llenar todos los campos',
                footer: '<a href>Why do I have this issue?</a>'
            });
        } else if (!expressionEmail.test(email.value)) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Email inválido'
            });
        } else {
            emailjs.sendForm('service_7xvmcss', 'template_80ty99h', '#form', 'Yh5Zzyawgwf5Gilqw')
                .then(function(response) {
                    console.log('SUCCESS!', response.status, response.text);
                    Swal.fire({
                        title: 'Enviado con éxito!',
                        text: 'Gracias por contactarnos.',
                        icon: 'success',
                        showConfirmButton: false,
                        timer: 1500,
                        didOpen: () => {
                            Swal.getIcon().style.webkitAnimation = 'rotate 2s linear infinite';
                            Swal.getIcon().style.animation = 'rotate 2s linear infinite';
                        }
                    });
                    limpiar();
                }, function(error) {
                    console.log('FAILED...', error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error!',
                        text: 'Error al enviar mensaje'
                    });
                });
        }
    });

    function limpiar() {
        nombre.value = '';
        apellido.value = '';
        email.value = '';
        numero.value = '';
        mensaje.value = '';
    }
}
