function calcularSeccion() {
    const tratamiento = document.getElementById('treatmentCombo').value;
    const dentista = document.getElementById('dr').value;

    if (!tratamiento || !dentista) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos faltantes',
            text: 'Por favor, seleccione un tratamiento y un dentista.',
        });
        return;
    }

    let montoFinal = 0;

    switch (tratamiento) {
        case '1':
            montoFinal = 35000;
            break;
        case '2':
            montoFinal = 100000;
            break;
        case '3':
            montoFinal = 70000;
            break;
        case '4':
            montoFinal = 2500000;
            break;
        case '5':
            montoFinal = 2000000;
            break;
        case '6':
            montoFinal = 80000;
            break;
        case '7':
            montoFinal = 30000;
            break;
        case '8':
            montoFinal = 25000;
            break;
        case '9':
            montoFinal = 40000;
            break;
        case '10':
            montoFinal = 60000;
            break;
        default:
            montoFinal = 0;
    }

    let ajusteDentista = 0;

    switch (dentista) {
        case 'd1':
            ajusteDentista = 0;
            break;
        case 'd2':
            ajusteDentista = 0.1 * montoFinal;
            break;
        case 'd3':
            ajusteDentista = 0.15 * montoFinal;
            break;
        case 'd4':
            ajusteDentista = 0.2 * montoFinal;
            break;
    }

    montoFinal += ajusteDentista;

    document.getElementById('txtResultadoMontoFinal').textContent = `₡${montoFinal.toLocaleString()}`;
}

function searchClinic() {
    const citiesWithClinics = ['San José', 'Escazú', 'Santa Ana', 'Lindora', 'Ciudad Colón', 'Sabana'];
    const userCity = document.getElementById('searchInput').value.trim().toLowerCase();
    const clinicFound = citiesWithClinics.some(city => city.toLowerCase() === userCity);

    const resultElement = document.getElementById('pResult');
    if (clinicFound) {
        Swal.fire({
            icon: 'success',
            title: '¡Clínica encontrada!',
            text: '¡Hay una clínica en su zona!',
            showConfirmButton: false,
            timer: 1500
        });
        resultElement.textContent = "¡Hay una clínica en su zona!";
        resultElement.style.color = 'green';
    } else {
        Swal.fire({
            icon: 'error',
            title: 'No encontrada',
            text: 'Lo sentimos, no hay clínicas en su zona.',
        });
        resultElement.textContent = "Lo sentimos, no hay clínicas en su zona.";
        resultElement.style.color = 'red';
    }
}

function limpiarSeccion() {
    document.getElementById('treatmentCombo').selectedIndex = 0;
    document.getElementById('searchInput').value = '';
    document.getElementById('pResult').textContent = '';
    document.getElementById('dr').selectedIndex = 0;
    document.getElementById('txtResultadoMontoFinal').textContent = '₡0';
    document.getElementById('pResult').style.color = ''; 
}


// Función para la información del formulario de reservación
function validarYMostrarReservacion() {
    const nombreCompleto = document.getElementById('txt-nombre_completo').value;
    const fechaCita = document.getElementById('txt-fecha').value;
    const horaCita = document.getElementById('txt-hora').value;
    const email = document.getElementById('txt-email').value;
    const telefono = document.getElementById('txt-telefono').value;
    const tratamiento = document.getElementById('treatmentCombo').value;
    const dentista = document.getElementById('dr').value;
    const tipoPago = document.querySelector('input[name="rbt-moneda"]:checked');

    if (!nombreCompleto || !fechaCita || !fechaCita || !email || !telefono || !tratamiento || !dentista || !tipoPago) {
        Swal.fire({
            icon: 'warning',
            title: 'Campos faltantes',
            text: 'Por favor, complete todos los campos del formulario.',
        });
        return;
    }

    const tratamientoText = document.querySelector('#treatmentCombo option:checked').textContent;
    const dentistaText = document.querySelector('#dr option:checked').textContent;
    const tipoPagoText = tipoPago.value;

    const montoFinal = document.getElementById('txtResultadoMontoFinal').textContent;

    const templateParams = {
        nombre_completo: nombreCompleto,
        fecha_cita: fechaCita,
        hora_cita: horaCita,
        email: email,
        telefono: telefono,
        tratamiento: tratamientoText,
        dentista: dentistaText,
        tipo_pago: tipoPagoText,
        monto_final: montoFinal
    };

    // correo electrónico con EmailJS
    emailjs.send('service_7xvmcss', 'template_80ty99h', templateParams, 'Yh5Zzyawgwf5Gilqw')
        .then((response) => {
            Swal.fire({
                icon: 'success',
                title: 'Reservación Confirmada',
                text: 'La confirmación de la cita se ha enviado a la clínica.',
            });
        }, (error) => {
            Swal.fire({
                icon: 'error',
                title: 'Error al enviar',
                text: 'Hubo un problema al enviar la confirmación a la clínica.',
            });
        });
}


function limpiarFormulario() {
    document.getElementById('reserva').reset();
}



// función al botón de agendar
document.getElementById('btn-agendar').addEventListener('click', validarYMostrarReservacion);
