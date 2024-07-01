document.getElementById('go-button').addEventListener('click', function() {
    const url = document.getElementById('url-selector').value;
    if (url) {
        window.open(url, '_blank');
    } else {
        Swal.fire({
            icon: 'warning',
            title: 'Oops...',
            text: 'Por favor, selecciona una opción.'
        });
    }
});