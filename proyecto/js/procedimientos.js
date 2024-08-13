document.getElementById('tratamientos').addEventListener('change', galeria);

function galeria() {
    var opciones = document.getElementById('tratamientos').value;
    switch (opciones) {
        case "blanqueamientos":
            document.querySelector('.galeriaBlanqueamientos').style.display = "block"
            document.querySelector('.galeriaImplantes').style.display = "none"
            document.querySelector('.galeriaInvisaling').style.display = "none"
            document.querySelector('.galeriaCarillas').style.display = "none"
            break;


        case "implantes":
            document.querySelector('.galeriaBlanqueamientos').style.display = "none"
            document.querySelector('.galeriaImplantes').style.display = "block"
            document.querySelector('.galeriaInvisaling').style.display = "none"
            document.querySelector('.galeriaCarillas').style.display = "none"
            break;
    
        case "invisaling":
            document.querySelector('.galeriaBlanqueamientos').style.display = "none"
            document.querySelector('.galeriaImplantes').style.display = "none"
            document.querySelector('.galeriaInvisaling').style.display = "block"
            document.querySelector('.galeriaCarillas').style.display = "none"
            break;

        case "carillas":
            document.querySelector('.galeriaBlanqueamientos').style.display = "none"
            document.querySelector('.galeriaImplantes').style.display = "none"
            document.querySelector('.galeriaInvisaling').style.display = "none"
            document.querySelector('.galeriaCarillas').style.display = "block"
            break;

    }
}

