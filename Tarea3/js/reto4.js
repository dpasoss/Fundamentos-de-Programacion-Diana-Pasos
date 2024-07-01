document.addEventListener('DOMContentLoaded', () => {
    const menuOpciones = document.getElementById('menuOpciones');
    const infoTarjeta = document.getElementById('infoTarjeta');
    const descripcionTarjeta = document.getElementById('descripcionTarjeta');
    const imagenTarjeta = document.getElementById('imagenTarjeta');

    menuOpciones.addEventListener('change', () => {
        const seleccion = menuOpciones.value;

        if (seleccion === "") {
            infoTarjeta.style.display = 'none';
        } else {
            infoTarjeta.style.display = 'flex';
            let titulo, descripcion, imagen;

            switch (seleccion) {
                case 'clasica':
                    titulo = 'CashBack Clásica Mastercard';
                    descripcion = 'Acumulá un 1% de CashBack por tus compras en tiendas, supermercados y restaurantes. Podés redimir tus puntos Cashback acumulados a través de Banca en Línea. <br> <br> El plan de lealtad CashBack clásico, dorado y platino de la marca MasterCard fue dado de baja. Si usted desea solicitar una tarjeta de crédito CashBack de MasterCard, podemos ofrecerle la tarjeta CashBack BIO, la cual está hecha de maíz no comestible (PLA), y que será compostada en condiciones especiales, es decir, que regresará a la naturaleza de forma segura, al terminar su vida útil. ';
                    imagen = 'img/clasica.png';
                    break;
                case 'dorada':
                    titulo = 'CashBack Dorada Mastercard';
                    descripcion = 'Acumulá un 1% de CashBack por tus compras en tiendas, supermercados y restaurantes. Redimí tus puntos Cashback acumulados a través de Banca en Línea.<br> <br> El plan de lealtad CashBack clásico, dorado y platino de la marca MasterCard fue dado de baja. Si usted desea solicitar una tarjeta de crédito CashBack de MasterCard, podemos ofrecerle la tarjeta CashBack BIO, la cual está hecha de maíz no comestible (PLA), y que será compostada en condiciones especiales, es decir, que regresará a la naturaleza de forma segura, al terminar su vida útil. <br> <br>  Conocé los beneficios que te ofrece la cobertura exclusiva de tu Tarjeta: <br> <br>  -Mastercard® Global Service. <br> <br> -Protección de compras. <br> <br> -Garantía Extendida. <br> <br> -Información de Coberturas';
                    imagen = 'img/dorada.png';
                    break;
                case 'platino':
                    titulo = 'CashBack Platino Mastercard';
                    descripcion = '- Acumulá un 1% de CashBack por tus compras en tiendas, supermercados y restaurantes. Redimí tus puntos Cashback acumulados a través de Banca en Línea. <br> <br> El plan de lealtad CashBack clásico, dorado y platino de la marca MasterCard fue dado de baja. Si usted desea solicitar una tarjeta de crédito CashBack de MasterCard, podemos ofrecerle la tarjeta CashBack BIO, la cual está hecha de maíz no comestible (PLA), y que será compostada en condiciones especiales, es decir, que regresará a la naturaleza de forma segura, al terminar su vida útil. <br> <br>  Conocé los beneficios que te ofrece la cobertura exclusiva de tu Tarjeta: <br> <br> -Accedé al VIP Lounge Costa Rica <br> <br> -Mastercard® Global Service <br> <br> -MasterAssist™ Plus <br> <br> -Concierge <br> <br> -MasterRental™ <br> <br> -Mastercard® Travel Services <br> <br> -Servicio de Asistencia de Viajes <br> <br> -Priceless Cities';
                    imagen = 'img/platino.png';
                    break;
                case 'black':
                    titulo = 'CashBack Black Mastercard';
                    descripcion = '- Acumulá hasta un 5% de Cashback. Canjeá puntos por días de alquiler o ascensos de categoría gratuitos. Accedé a más de 1000 salas VIP de aeropuertos en todo el mundo. <br> <br> El plan de lealtad CashBack clásico, dorado y platino de la marca MasterCard fue dado de baja. Si usted desea solicitar una tarjeta de crédito CashBack de MasterCard, podemos ofrecerle la tarjeta CashBack BIO, la cual está hecha de maíz no comestible (PLA), y que será compostada en condiciones especiales, es decir, que regresará a la naturaleza de forma segura, al terminar su vida útil. <br> <br>  Conocé los beneficios que te ofrece la cobertura exclusiva de tu Tarjeta: <br><br> -Acceso Exclusivo a Eventos <br><br> -Concierge Travel & Living <br><br> -Valet Parking <br><br> -Mastercard® Global Service <br><br> -MasterAssist™ Black <br><br> -Inconvenientes de Viajes <br><br> -Protección de Compras <br><br> -Protección de Equipaje <br><br> -Garantía Extendida <br><br> -MasterRental™ <br><br> -Boingo <br><br> -Internet sin costo <br><br> -Servicio de Asistencia de Viajes <br><br> -Experiencia en Aeropuertos de Mastercard® <br><br> -Protección contra Robo en ATM <br><br> -Priceless Cities';
                    imagen = 'img/black.png';
                    break;
            }

            descripcionTarjeta.innerHTML = `<p>${descripcion}</p>`;
            imagenTarjeta.innerHTML = `<img src="${imagen}" alt="${titulo}">`;

            Swal.fire({
                title: titulo,
                text: 'Consulta la descripción y requisitos en la página del BAC.',
                icon: 'info',
                confirmButtonText: 'Cerrar'
            });
        }
    });
});