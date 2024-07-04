$(document).ready(function() {
   
    $('img[usemap]').rwdImageMaps();

   
    $("#area1").click(function() {
        Swal.fire({
            icon: 'info',
            title: 'PALE ALE',
            text: 'Aroma a malta, sabor moderadamente cítrico o frutal, color tostado o ámbar',
            showClass: {
                popup: 'animated zoomIn',
            },
            hideClass: {
                popup: 'animated zoomOut',
            }
        });
    });

    $("#area2").click(function() {
        Swal.fire({
            icon: 'info',
            title: 'PORTER',
            text: 'Aroma a malta tostado, sabor amargo del lúpulo, caramelizado y lijero sabor a chocolate, color con tonalidades marrón',
            showClass: {
                popup: 'animated zoomIn',
            },
            hideClass: {
                popup: 'animated zoomOut',
            }
        });
    });

    $("#area3").click(function() {
        Swal.fire({
            icon: 'info',
            title: 'IPA',
            text: 'Aroma con notas florales, frutales y herbales, sabor amargo por alta fermentación, color dorado y cobrizo',
            showClass: {
                popup: 'animated zoomIn',
            },
            hideClass: {
                popup: 'animated zoomOut',
            }
        });
    });

    $("#area4").click(function() {
        Swal.fire({
            icon: 'info',
            title: 'AMBER',
            text: 'Aromas cítricos por lo regular, sabor a lúpulo de moderado a alto, con un equilibrio de malta caramelo, color ámbar rojizo',
            showClass: {
                popup: 'animated zoomIn',
            },
            hideClass: {
                popup: 'animated zoomOut',
            }
        });
    });

    $("#area5").click(function() {
        Swal.fire({
            icon: 'info',
            title: 'HEFEWEIZEN',
            text: 'Aroma frutal, dulce, aparincia turbia con un ligero sabor a vainilla',
            showClass: {
                popup: 'animated zoomIn',
            },
            hideClass: {
                popup: 'animated zoomOut',
            }
        });
    });

    $("#area6").click(function() {
        Swal.fire({
            icon: 'info',
            title: 'BROW ALE',
            text: 'Aroma a malta tostado, ligeramente amarga, malta oscura sabor a caramelo con ligeros toques de café',
            
            showClass: {
                popup: 'animated zoomIn',
            },
            hideClass: {
                popup: 'animated zoomOut',
            }
        });
    });
});