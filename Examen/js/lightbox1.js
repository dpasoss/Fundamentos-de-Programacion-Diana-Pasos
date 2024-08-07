// Función para revelar lightbox y agregar reproducción automática de YouTube
function ejecutar(div, video_id) {
    var videoElement = document.getElementById(video_id);
    if (videoElement) {
        var videoSrc = videoElement.src;
        // adicionar el autoplay URL solo si no está ya presente
        if (!videoSrc.includes('&autoplay=1')) {
            videoElement.src = videoSrc + '&autoplay=1';
        }
        document.getElementById(div).style.display = 'block';
    }
}

function ocultar(div, video_id) {
    var videoElement = document.getElementById(video_id);
    if (videoElement) {
        var videoSrc = videoElement.src;
        // remover el autoplay URL
        var cleanedSrc = videoSrc.replace('&autoplay=1', '');
        videoElement.src = cleanedSrc;
        document.getElementById(div).style.display = 'none';
    }
}
