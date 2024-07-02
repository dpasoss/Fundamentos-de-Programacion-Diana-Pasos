window.onload = function() {
    document.getElementById("articulo").onchange = function(e) {
        var a = e.target.value;
        var imagen = "";
        switch (a) {
            case "Refrigeradora":
                imagen = "img/fridge.png";
                break;
            case "Cocina":
                imagen = "img/cocina.png";
                break;
            case "Lavavajillas":
                imagen = "img/dishwasher.png";
                break;
            case "Lavadora":
                imagen = "img/lavadora.png";
                break;
            case "Secadora":
                imagen = "img/dryer.png";
                break;
            default:
                imagen = "img/electrodomesticos.jpg";
        }
        document.getElementById("img").src = imagen;
    }

    document.getElementById("marca").onchange = function (es) {
        
        n = es.target.value;
    }
    
}

function calcular() {
    if (document.getElementById("articulo").value == "Seleccione un artículo:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text: "Seleccionar el artículo y marca deseada.",
        });
        return;
    }

    if (document.getElementById("marca").value == "Seleccione una marca:") {
        swal.fire({
            icon: "info",
            title: "Atención",
            text: "Seleccionar el artículo y marca deseada.",
        });
        return;
    }

    var a = document.getElementById("articulo").value;
    var n = document.getElementById("marca").value;
    var montoCuota = 0;

    switch (a) {
        case "Refrigeradora":
            switch (n) {
                case "Whirlpool":
                    montoCuota = 800;
                    break;
                case "Black & Decker":
                    montoCuota = 750;
                    break;
                case "Mabe":
                    montoCuota = 700;
                    break;
                case "Samsung":
                    montoCuota = 850;
                    break;
                case "Frigidaire":
                    montoCuota = 800;
                    break;
                default:
                    montoCuota = 700;
            }
            break;
        case "Cocina":
            switch (n) {
                case "Whirlpool":
                    montoCuota = 600;
                    break;
                case "Black & Decker":
                    montoCuota = 550;
                    break;
                case "Mabe":
                    montoCuota = 500;
                    break;
                case "Samsung":
                    montoCuota = 650;
                    break;
                case "Frigidaire":
                    montoCuota = 600;
                    break;
                default:
                    montoCuota = 500;
            }
            break;
        case "Lavavajillas":
            switch (n) {
                case "Whirlpool":
                    montoCuota = 700;
                    break;
                case "Black & Decker":
                    montoCuota = 650;
                    break;
                case "Mabe":
                    montoCuota = 600;
                    break;
                case "Samsung":
                    montoCuota = 750;
                    break;
                case "Frigidaire":
                    montoCuota = 700;
                    break;
                default:
                    montoCuota = 600;
            }
            break;
        case "Lavadora":
            switch (n) {
                case "Whirlpool":
                    montoCuota = 900;
                    break;
                case "Black & Decker":
                    montoCuota = 850;
                    break;
                case "Mabe":
                    montoCuota = 800;
                    break;
                case "Samsung":
                    montoCuota = 950;
                    break;
                case "Frigidaire":
                    montoCuota = 990;
                    break;
                default:
                    montoCuota = 800;
            }
            break;
        case "Secadora":
            switch (n) {
                case "Whirlpool":
                    montoCuota = 850;
                    break;
                case "Black & Decker":
                    montoCuota = 800;
                    break;
                case "Mabe":
                    montoCuota = 750;
                    break;
                case "Samsung":
                    montoCuota = 900;
                    break;
                case "Frigidaire":
                    montoCuota = 850;
                    break;
                default:
                    montoCuota = 750;
            }
            break;
        default:
            montoCuota = 0;
    }

    let imagenDireccion = "img/" + a.toLowerCase() + ".png";

    swal.fire({
        imageUrl: imagenDireccion,
        html: "<p>Mira la cuota mensual de " +
            a + 
            " " +
            n + 
            "<br> <br> <strong> Cuota mensual: </strong></p> " +
            "₡" +
            montoCuota,
        imageWidth: 700,
        imageHeight: 350,
        imageAlt: "Artículo " + a,
    });
}