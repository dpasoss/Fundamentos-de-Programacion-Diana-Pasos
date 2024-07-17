// Variables controladoras
var panorama, viewer, container, infospot;
 
// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#panorama-container');
 
// Carga la foto 360
panorama = new PANOLENS.ImagePanorama('img/hotel.jpeg');
 
 
 
/* ***************** ********************* ***************** */
/* ***************** Zona de interacciones ***************** */
/* ***************** ********************* ***************** */
 
 
/* ***************** Zona Interacción #1 ***************** */
// var infospot1 = new PANOLENS. Infospot(50, PANOLENS.DataImage. Info);
var infospot1 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot1.position.set(499 ,-59 , 120);
infospot1.addHoverText('Disfrute de una experiencia visual inigualable con nuestro televisor de plasma de alta calidad. Este dispositivo ofrece una claridad de imagen excepcional y colores vibrantes que transformarán su entretenimiento en casa. Con una resolución Full HD, cada escena cobra vida con detalles precisos y una nitidez sorprendente. <br><br> Además, nuestro televisor plasma incluye acceso integrado a las plataformas de streaming más populares, como Netflix, Amazon Prime Video, Disney+, y YouTube. Con solo unos pocos clics, podrá disfrutar de una amplia gama de películas, series, documentales y contenido exclusivo directamente en su televisor, sin necesidad de dispositivos adicionales.', -60);
 
infospot1.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 400px;">Disfrute de una experiencia visual inigualable con nuestro televisor de plasma de alta calidad. Este dispositivo ofrece una claridad de imagen excepcional y colores vibrantes que transformarán su entretenimiento en casa. Con una resolución Full HD, cada escena cobra vida con detalles precisos y una nitidez sorprendente. <br><br> Además, nuestro televisor plasma incluye acceso integrado a las plataformas de streaming más populares, como Netflix, Amazon Prime Video, Disney+, y YouTube. Con solo unos pocos clics, podrá disfrutar de una amplia gama de películas, series, documentales y contenido exclusivo directamente en su televisor, sin necesidad de dispositivos adicionales.</div>';
 
panorama.add(infospot1);
 
/* ***************** Zona Interacción #2 ***************** */
var infospot2 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot2.position.set(277 ,34 , -500);
infospot2.addHoverText('Disfrute de una experiencia visual inigualable con nuestro televisor de plasma de alta calidad. Este dispositivo ofrece una claridad de imagen excepcional y colores vibrantes que transformarán su entretenimiento en casa. Con una resolución Full HD, cada escena cobra vida con detalles precisos y una nitidez sorprendente. <br> Además, nuestro televisor plasma incluye acceso integrado a las plataformas de streaming más populares, como Netflix, Amazon Prime Video, Disney+, y YouTube. Con solo unos pocos clics, podrá disfrutar de una amplia gama de películas, series, documentales y contenido exclusivo directamente en su televisor, sin necesidad de dispositivos adicionales.', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">Disfrute de una experiencia visual inigualable con nuestro televisor de plasma de alta calidad. Este dispositivo ofrece una claridad de imagen excepcional y colores vibrantes que transformarán su entretenimiento en casa. Con una resolución Full HD, cada escena cobra vida con detalles precisos y una nitidez sorprendente. <br> Además, nuestro televisor plasma incluye acceso integrado a las plataformas de streaming más populares, como Netflix, Amazon Prime Video, Disney+, y YouTube. Con solo unos pocos clics, podrá disfrutar de una amplia gama de películas, series, documentales y contenido exclusivo directamente en su televisor, sin necesidad de dispositivos adicionales.</div>';
 
panorama.add(infospot2);
 
/* ***************** Zona Interacción #3 ***************** */
var infospot3 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot3.position.set(-250 ,-160 , 500);
infospot3.addHoverText('El Nissan Qashqai 2024 mejora con un diseño renovado, mayor eficiencia en motorizaciones híbridas y nuevas funciones tecnológicas. Incorpora un sistema de infoentretenimiento más avanzado, mejores materiales en el interior y funciones de asistencia al conductor mejoradas, como la conducción semiautónoma y la detección de peatones.', -60);
infospot3.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">El Nissan Qashqai 2024 mejora con un diseño renovado, mayor eficiencia en motorizaciones híbridas y nuevas funciones tecnológicas. Incorpora un sistema de infoentretenimiento más avanzado, mejores materiales en el interior y funciones de asistencia al conductor mejoradas, como la conducción semiautónoma y la detección de peatones.</div>';
 
panorama.add(infospot3);


/* ***************** Zona Interacción #4 ***************** */
var infospot4 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot4.position.set(-500 ,-285 , 120);
infospot4.addHoverText('', -60);
infospot4.element.innerHTML = `
    <div>
        <iframe style="width: 300px; height: 200px;" src="#" frameborder="0"></iframe>
    </div>
`;
panorama.add(infospot3);
 

/* ***************** Zona Interacción #5 ***************** */

var infospot3 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot3.position.set(-500 ,-286 , 36);


/* ***************** Zona Interacción #6 ***************** */

var infospot3 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot3.position.set(204 ,-23 , 500);


/* ***************** Zona Interacción #7 ***************** */

var infospot3 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot3.position.set(283 ,-261 , -500);



 
 
// Agregar la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);



























viewer.add(panorama);