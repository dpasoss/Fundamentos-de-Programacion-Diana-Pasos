document.addEventListener('DOMContentLoaded', function() {
    const buscadorForm = document.getElementById('buscadorForm');
    const palabraInput = document.getElementById('palabra');
    const resultadoContainer = document.getElementById('resultado');

    buscadorForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const palabra = palabraInput.value.trim();

        // Validación para verificar si la palabra está vacía
        if (palabra.length === " ") {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Por favor ingrese una palabra'
            });
        } else if (!isNaN(palabra)) { // Verifica si la palabra ingresada es un número
            Swal.fire({
                icon: 'error',
                title: 'Búsqueda Inválida',
                text: 'No se permite la búsqueda por números. Por favor ingrese un término válido.'
            });
        } else {
            mostrarInformacion(palabra);
        }
    });

    function mostrarInformacion(palabra) {
        const glossary = [
            { term: 'Ortodoncia', definition: 'Tratamiento para corregir los dientes y mandíbulas desalineadas.' },
            { term: 'Carillas', definition: 'Finas láminas de porcelana o resina que se colocan en la superficie de los dientes para mejorar su apariencia.' },
            { term: 'Implantes', definition: 'Raíces dentales artificiales que se colocan en el hueso maxilar para soportar dientes artificiales.' },
            { term: 'Endodoncia', definition: 'Tratamiento de conductos radiculares para salvar un diente dañado o infectado.' },
            { term: 'Periodoncia', definition: 'Especialidad que se ocupa de las encías y el hueso que sostiene los dientes.' }
        ];

        const resultados = glossary.filter(entry =>
            entry.term.toLowerCase().includes(palabra.toLowerCase()) ||
            entry.definition.toLowerCase().includes(palabra.toLowerCase())
        );

        if (resultados.length > 0) {
            resultadoContainer.innerHTML = resultados.map(entry =>
                `<div>
                    <h3>${entry.term}</h3>
                    <p>${entry.definition}</p>
                </div>`
            ).join('');
        } else {
            resultadoContainer.innerHTML = '<p>No se encontraron resultados.</p>';
        }
    }

    function borrar() {
        palabraInput.value = '';
        resultadoContainer.innerHTML = '';
    }

    // Asegúrate de que el botón de borrar no recargue la página
    document.querySelector('button[onclick="borrar()"]').addEventListener('click', function(event) {
        event.preventDefault();
        borrar();
    });
});
