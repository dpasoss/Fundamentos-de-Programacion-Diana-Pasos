// Arreglo para almacenar los datos de los empleados
const empleados = [];

// Función para agregar un empleado al arreglo
function agregarEmpleado() {
    // Obtener los valores del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const enero = parseFloat(document.getElementById('enero').value);
    const febrero = parseFloat(document.getElementById('febrero').value);
    const marzo = parseFloat(document.getElementById('marzo').value);
    const abril = parseFloat(document.getElementById('abril').value);
    const mayo = parseFloat(document.getElementById('mayo').value);
    const junio = parseFloat(document.getElementById('junio').value);
    const julio = parseFloat(document.getElementById('julio').value);
    const agosto = parseFloat(document.getElementById('agosto').value);
    const septiembre = parseFloat(document.getElementById('septiembre').value);
    const octubre = parseFloat(document.getElementById('octubre').value);
    const noviembre = parseFloat(document.getElementById('noviembre').value);
    const diciembre = parseFloat(document.getElementById('diciembre').value);

    // Validar que todos los campos estén llenos y que los pagos sean números válidos
    if (
        nombre === '' || apellido === '' ||
        isNaN(enero) || isNaN(febrero) || isNaN(marzo) || isNaN(abril) ||
        isNaN(mayo) || isNaN(junio) || isNaN(julio) || isNaN(agosto) ||
        isNaN(septiembre) || isNaN(octubre) || isNaN(noviembre) || isNaN(diciembre)
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe llenar todos los campos con valores numéricos.',
        });
        return;
    }

    // Calcular el aguinaldo
    const aguinaldo = (enero + febrero + marzo + abril + mayo + junio +
        julio + agosto + septiembre + octubre + noviembre + diciembre) / 12;

    // Crear objeto empleado
    const empleado = {
        nombre: nombre,
        apellido: apellido,
        enero: enero,
        febrero: febrero,
        marzo: marzo,
        abril: abril,
        mayo: mayo,
        junio: junio,
        julio: julio,
        agosto: agosto,
        septiembre: septiembre,
        octubre: octubre,
        noviembre: noviembre,
        diciembre: diciembre,
        aguinaldo: aguinaldo.toFixed(2), // Redondear el aguinaldo a dos decimales
    };

    // Agregar empleado al arreglo
    empleados.push(empleado);

    // Actualizar el select con los nombres de los empleados
    actualizarSelect();

    // Limpiar los campos del formulario después de agregar un empleado
    limpiarFormulario();

    // Mostrar mensaje de éxito
    Swal.fire({
        icon: 'success',
        title: 'Empleado agregado',
        text: 'Se ha registrado el empleado correctamente.',
    });
}

// Función para actualizar el select con los nombres de los empleados
function actualizarSelect() {
    const select = document.getElementById('seleccionarEstudiante');
    // Limpiar opciones actuales
    select.innerHTML = '<option>Seleccione un empleado</option>';

    // Agregar opciones nuevas
    empleados.forEach((empleado, index) => {
        const option = document.createElement('option');
        option.value = index.toString(); // Usar el índice como valor
        option.text = `${empleado.nombre} ${empleado.apellido}`;
        select.appendChild(option);
    });
}

// Función para calcular el aguinaldo de un empleado seleccionado
function calcularPromedioSeleccionado() {
    const select = document.getElementById('seleccionarEstudiante');
    const index = parseInt(select.value); // Obtener el índice seleccionado

    if (isNaN(index) || index < 0 || index >= empleados.length) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe seleccionar un empleado válido.',
        });
        return;
    }

    const empleado = empleados[index];
    const aguinaldo = parseFloat(empleado.aguinaldo);

    // Mostrar el resultado del aguinaldo
    const resultado = document.getElementById('resultado');
    resultado.textContent = `El aguinaldo de ${empleado.nombre} ${empleado.apellido} es: $${aguinaldo.toFixed(2)}`;
}

// Función para limpiar el formulario después de agregar un empleado
function limpiarFormulario() {
    document.getElementById('nombre').value = '';
    document.getElementById('apellido').value = '';
    document.getElementById('enero').value = '';
    document.getElementById('febrero').value = '';
    document.getElementById('marzo').value = '';
    document.getElementById('abril').value = '';
    document.getElementById('mayo').value = '';
    document.getElementById('junio').value = '';
    document.getElementById('julio').value = '';
    document.getElementById('agosto').value = '';
    document.getElementById('septiembre').value = '';
    document.getElementById('octubre').value = '';
    document.getElementById('noviembre').value = '';
    document.getElementById('diciembre').value = '';
}

// Configurar SweetAlert2 para el proyecto
Swal.fire({
    icon: 'info',
    title: 'Bienvenido',
    text: 'Ingrese los datos de los empleados para calcular el aguinaldo.',
});
