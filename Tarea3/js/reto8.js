
const empleados = [];

function agregarEmpleado() {
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
    const setiembre = parseFloat(document.getElementById('setiembre').value);
    const octubre = parseFloat(document.getElementById('octubre').value);
    const noviembre = parseFloat(document.getElementById('noviembre').value);
    const diciembre = parseFloat(document.getElementById('diciembre').value);

    if (
        nombre === '' || apellido === '' ||
        isNaN(enero) || isNaN(febrero) || isNaN(marzo) || isNaN(abril) || isNaN(mayo) || isNaN(junio) || isNaN(julio) || isNaN(agosto) || isNaN(setiembre) || isNaN(octubre) || isNaN(noviembre) || isNaN(diciembre)
    ) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe llenar todos los campos con valores numéricos.',
        });
        return;
    }

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
        setiembre: setiembre,
        octubre: octubre,
        noviembre: noviembre,
        diciembre: diciembre
    };

    empleados.push(empleado);

    actualizarSelect();

    Swal.fire({
        icon: 'success',
        title: 'Empleado agregado',
        text: 'Se ha registrado el empleado correctamente.',
    });
}

function actualizarSelect() {
    const select = document.getElementById('seleccionarEmpleado');
    select.innerHTML = '<option value="">Seleccione un empleado</option>';
    empleados.forEach((empleado, index) => {
        const option = document.createElement('option');
        option.value = index.toString(); 
        option.text = `${empleado.nombre} ${empleado.apellido}`;
        select.appendChild(option);
    });
}

function calcularAguinaldo() {
    const select = document.getElementById('seleccionarEmpleado');
    const index = parseInt(select.value);

    if (isNaN(index) || index < 0 || index >= empleados.length) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Debe seleccionar un empleado válido.',
        });
        return;
    }

    const empleado = empleados[index];
    const aguinaldo = (empleado.enero + empleado.febrero + empleado.marzo + empleado.abril + empleado.mayo + empleado.junio + empleado.julio + empleado.agosto + empleado.setiembre + empleado.octubre + empleado.noviembre + empleado.diciembre) / 12;

    const resultado = document.getElementById('resultado');
    resultado.textContent = `El aguinaldo de ${empleado.nombre} ${empleado.apellido} es: ₡${aguinaldo.toFixed(2)}`;
}


function limpiarDatos() {
document.getElementById('mayo').value = '';
document.getElementById('junio').value = '';
document.getElementById('julio').value = '';
document.getElementById('agosto').value = '';
document.getElementById('setiembre').value = '';
document.getElementById('octubre').value = '';
document.getElementById('noviembre').value = '';
document.getElementById('diciembre').value = '';

Swal.fire({
    icon: 'success',
    title: 'Campos limpiados',
    text: 'Se han limpiado los campos correctamente.',
});

}
