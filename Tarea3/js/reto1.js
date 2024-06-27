document.getElementById('facturar').addEventListener('click', function() {
    const cliente = document.getElementById('cliente').value;
    const articulo = document.getElementById('articulo').value;
    const cantidad = parseFloat(document.getElementById('cantidad').value);
    const precio = parseFloat(document.getElementById('precio').value);

    if (cliente && articulo && cantidad && precio) {
        const subtotal = cantidad * precio;
        const iva = subtotal * 0.13;
        const servicio = subtotal * 0.05;
        const total = subtotal + iva + servicio;

        document.getElementById('subtotal').value = formatCurrency(subtotal);
        document.getElementById('iva').value = formatCurrency(iva);
        document.getElementById('servicio').value = formatCurrency(servicio);
        document.getElementById('total').value = formatCurrency(total);

        Swal.fire({
            icon: 'success',
            title: 'Factura Generada',
            text: 'La factura ha sido calculada correctamente.'
        });
    } else {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, complete todos los campos.'
        });
    }
});

document.getElementById('borrar').addEventListener('click', function() {
    document.getElementById('facturaForm').reset();
    clearCurrencyFields(['subtotal', 'iva', 'servicio', 'total']);

    Swal.fire({
        icon: 'info',
        title: 'Formulario Borrado',
        text: 'Todos los campos han sido limpiados.'
    });
});

document.getElementById('correo').addEventListener('click', function() {
    Swal.fire({
        icon: 'warning',
        title: 'Función No Implementada',
        text: 'La función de enviar por correo aún no está implementada.'
    });
});

document.getElementById('imprimir').addEventListener('click', function() {
    window.print();
});




function formatCurrency(amount) {
    return `₡${amount.toFixed(2)}`;
}


function clearCurrencyFields(fieldIds) {
    fieldIds.forEach(id => {
        document.getElementById(id).value = '₡';
    });
}