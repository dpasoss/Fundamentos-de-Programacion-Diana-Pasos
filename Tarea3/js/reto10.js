const empleados = {
    '109110338': {
        nombre: 'Juan',
        apellidos: 'Pérez González',
        foto: 'img/foto1.jpg',
        lugar: 'San José, Costa Rica',
        regimen: 'Contributivo',
        anioIngreso: 2015,
        departamento: 'Finanzas'
    },
    '209110338': {
        nombre: 'María',
        apellidos: 'Rodríguez Fernández',
        foto: 'img/foto2.jpg',
        lugar: 'Alajuela, Costa Rica',
        regimen: 'No Contributivo',
        anioIngreso: 2018,
        departamento: 'Ventas'
    },
    '309110338': {
        nombre: 'Carlos',
        apellidos: 'López Martínez',
        foto: 'img/foto3.jpg',
        lugar: 'Cartago, Costa Rica',
        regimen: 'Contributivo',
        anioIngreso: 2012,
        departamento: 'Administración'
    },
    '409110338': {
        nombre: 'Ana',
        apellidos: 'Sánchez Ramírez',
        foto: 'img/foto4.jpg',
        lugar: 'Heredia, Costa Rica',
        regimen: 'Contributivo',
        anioIngreso: 2020,
        departamento: 'Finanzas'
    },
    '509110338': {
        nombre: 'Luis',
        apellidos: 'García Torres',
        foto: 'img/foto5.jpg',
        lugar: 'Puntarenas, Costa Rica',
        regimen: 'No Contributivo',
        anioIngreso: 2017,
        departamento: 'Ventas'
    }
};

function buscarEmpleado() {
    const cedula = document.getElementById('cedula').value;
    const resultadoDiv = document.getElementById('resultado');

    if (empleados[cedula]) {
        const empleado = empleados[cedula];
        resultadoDiv.innerHTML = `
            <h2>Información del Empleado</h2>
            <p><strong>Nombre:</strong> ${empleado.nombre}</p>
            <p><strong>Apellidos:</strong> ${empleado.apellidos}</p>
            <p><strong>Lugar:</strong> ${empleado.lugar}</p>
            <p><strong>Régimen:</strong> ${empleado.regimen}</p>
            <p><strong>Año de Ingreso:</strong> ${empleado.anioIngreso}</p>
            <p><strong>Departamento:</strong> ${empleado.departamento}</p>
            <img src="${empleado.foto}" alt="Foto de ${empleado.nombre}" style="width: 150px; height: auto;">
        `;
        Swal.fire({
            title: 'Empleado Encontrado',
            text: `Se ha encontrado la información del empleado ${empleado.nombre} ${empleado.apellidos}.`,
            icon: 'success'
        });
    } else {
    
        Swal.fire({
            title: 'Empleado No Encontrado',
            text: 'El número de cédula ingresado no corresponde a ningún empleado registrado.',
            icon: 'error'
        });
    }
}
