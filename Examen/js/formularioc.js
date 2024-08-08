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
                        showConfirmButton: false,
                        timer: 3000,
                        html: '<iframe src="https://lottie.host/embed/cbc155f2-6fc7-4962-ac0a-920e6cac48c2/IkVPf95omc.json"></iframe> <br><br><p>Gracias por contactarnos!</p>',

                        showConfirmButton: false,
                        timer: 2500,
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
