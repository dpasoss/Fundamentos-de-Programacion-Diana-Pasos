
var modal = document.getElementById("modal");




var img = document.getElementById("myImg");

var modalImg = document.getElementById("img");

var captionText = document.getElementById("caption");


 
img.onclick = function() {
    
    modal.style.display = "block";
    
    modalImg.src = this.src;
    
    captionText.innerHTML = this.alt;
}


var cerrar = document.getElementsByClassName("close")[0];

cerrar.onclick = function() {
    modal.style.display = "none";
}