function procesarPago() {
    const metodoPagoSeleccionado = document.querySelector('input[name="metodoPago"]:checked');
    const aceptaTerminos = document.getElementById('terminos').checked;

    if (metodoPagoSeleccionado && aceptaTerminos) {
        const metodoPago = metodoPagoSeleccionado.value;
        let mensaje = '';

        switch (metodoPago) {
            case 'visa':
                mensaje = 'Visa le regala un 10% de descuento en esta compra, gracias por usar Visa.';
                break;
            case 'mastercard':
                mensaje = 'Mastercard le regala un 20% de descuento en esta compra, gracias por usar Mastercard.';
                break;
            case 'americanexpress':
                mensaje = 'American Express le regala un 30% de descuento en esta compra, gracias por usar American Express.';
                break;
            default:
                mensaje = 'Seleccione un método de pago válido.';
                break;
        }

        // Mostrar el mensaje usando SweetAlert
        Swal.fire({
            icon: 'success',
            title: '¡Pago Procesado!',
            text: mensaje
        });

    } else {
        // Mostrar mensaje de error usando SweetAlert
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, seleccione un método de pago y acepte los términos y condiciones.'
        });
    }
}
