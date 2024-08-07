document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#btnCalcular').addEventListener('click', evaluacion);
    document.querySelector('#btnLimpiar').addEventListener('click', btnlimpiar);
});

function evaluacion() {
    if (!validar_radio()) {
        Swal.fire({
            title: 'Atención',
            text: 'Por favor, responde todas las preguntas antes de enviar la encuesta.',
            icon: 'warning',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Ok'
        });
    } else {
        let total = 0;
        const respuestas = document.querySelectorAll('input[type=radio]:checked');
        respuestas.forEach(respuesta => {
            total += parseInt(respuesta.value);
        });

        let porcentaje = (total / (respuestas.length * 4)) * 100;
        Swal.fire({
            title: 'Evaluación Completa',
            text: `Tu puntuación es: ${porcentaje.toFixed(2)}%`,
            icon: 'success',
            confirmButtonColor: '#28a745',
            confirmButtonText: 'Excelente'
        });
    }
}

function validar_radio() {
    const preguntas = document.querySelectorAll('.pt-4');
    for (let i = 0; i < preguntas.length; i++) {
        if (!preguntas[i].querySelector('input[type=radio]:checked')) {
            return false;
        }
    }
    return true;
}

function btnlimpiar() {
    document.querySelectorAll('input[type=radio]').forEach(radio => radio.checked = false);
    document.querySelectorAll('input[type=text]').forEach(input => input.value = "");
}
