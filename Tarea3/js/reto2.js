document.getElementById('convertir').addEventListener('click', function() {
    const montoDolares = parseFloat(document.getElementById('montoDolares').value);
    const tipoCambio = parseFloat(document.getElementById('tipoCambio').value);

    if (isNaN(montoDolares) || isNaN(tipoCambio) || tipoCambio <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un monto válido.'
        });
        return;
    }

    const montoColones = montoDolares * tipoCambio;
    document.getElementById('resultadoDolares').textContent = `${montoColones.toFixed(2)} colones`;
});

document.getElementById('convertirInverso').addEventListener('click', function() {
    const montoColones = parseFloat(document.getElementById('montoColones').value);
    const tipoCambioInverso = parseFloat(document.getElementById('tipoCambioInverso').value);

    if (isNaN(montoColones) || isNaN(tipoCambioInverso) || tipoCambioInverso <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, ingrese un monto válido.'
        });
        return;
    }

    const montoDolares = montoColones / tipoCambioInverso;
    document.getElementById('resultadoColones').textContent = `$${montoDolares.toFixed(2)} dólares`;
});



// Función para limpiar los campos 
document.querySelectorAll('.limpiar').forEach(button => {
    button.addEventListener('click', function() {
        const parentBox = this.closest('.conversion-box');
        parentBox.querySelector('input[type="number"]').value = '';
        parentBox.querySelector('.resultado').textContent = '';

        
        parentBox.querySelector('input[id^="tipoCambio"]').value = '';

        Swal.fire({
            icon: 'info',
            title: 'Campos Limpiados',
            text: 'Los campos han sido restablecidos.',
            showConfirmButton: false,
            timer: 1500
        });
    });
});
