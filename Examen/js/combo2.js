document.getElementById('btnCalcular').addEventListener('click', function() {
    const dentista = document.getElementById('dr').value;
    const procedimiento = document.getElementById('procedimiento').value;
    const resultado = document.getElementById('txtResultadoMontoFinal');
    let precio = 0;

    if (dentista === "" || procedimiento === "") {
        resultado.textContent = "Seleccione un dentista y un procedimiento.";
        return;
    }

    switch (dentista) {
        case 'd1': // Dra. Paula Mora
            switch (procedimiento) {
                case 'p1': // Limpieza Dental
                    precio = 30000;
                    break;
                case 'p2': // Consulta General
                    precio = 30000;
                    break;
                case 'p3': // Emergencia Dental
                    precio = 60000;
                    break;
                case 'p4': // Ortodoncia Invisalign
                    precio = 400000;
                    break;
                case 'p5': // Carillas Dentales
                    precio = 800000;
                    break;
                case 'p6': // Blanqueamiento
                    precio = 70000;
                    break;
            }
            break;
        case 'd2': // Dr. Camilo Vargas
            switch (procedimiento) {
                case 'p1':
                    precio = 36000;
                    break;
                case 'p2':
                    precio = 32000;
                    break;
                case 'p3':
                    precio = 62000;
                    break;
                case 'p4':
                    precio = 450000;
                    break;
                case 'p5':
                    precio = 810000;
                    break;
                case 'p6':
                    precio = 76000;
                    break;
            }
            break;
        case 'd3': // Dra. Ana Gómez
            switch (procedimiento) {
                case 'p1':
                    precio = 39000;
                    break;
                case 'p2':
                    precio = 33500;
                    break;
                case 'p3':
                    precio = 65000;
                    break;
                case 'p4':
                    precio = 500000;
                    break;
                case 'p5':
                    precio = 850000;
                    break;
                case 'p6':
                    precio = 80000;
                    break;
            }
            break;
        case 'd4': // Dr. Juan Pablo Aguirre
            switch (procedimiento) {
                case 'p1':
                    precio = 40000;
                    break;
                case 'p2':
                    precio = 35000;
                    break;
                case 'p3':
                    precio = 70000;
                    break;
                case 'p4':
                    precio = 530000;
                    break;
                case 'p5':
                    precio = 880000;
                    break;
                case 'p6':
                    precio = 88000;
                    break;
            }
            break;
    }

    resultado.textContent = `₡${precio.toLocaleString()}`;
});

function btnLimpiar() {
    document.getElementById('dr').value = '';
    document.getElementById('procedimiento').value = '';
    document.getElementById('txtResultadoMontoFinal').textContent = '₡0';
}
