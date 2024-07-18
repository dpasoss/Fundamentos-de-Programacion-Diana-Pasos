// Variables controladoras
var panorama, viewer, container, infospot;
 
// Obtener una referencia al contenedor donde se mostrará la escena 3D
container = document.querySelector('#panorama-container');
 
// Carga la foto 360
panorama = new PANOLENS.ImagePanorama('img/hotel.jpeg');
 
 
 
/* ***************** ********************* ***************** */
/* ***************** Zona de interacciones ***************** */
/* ***************** ********************* ***************** */
 
 
/* ***************** Zona Interacción #1 PANTALLA ***************** */
var infospot1 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot1.position.set(499 ,-59 , 120);
infospot1.addHoverText('Disfrute de una experiencia visual inigualable con nuestro televisor de plasma de alta calidad. Este dispositivo ofrece una claridad de imagen excepcional y colores vibrantes que transformarán su entretenimiento en casa. Con una resolución Full HD, cada escena cobra vida con detalles precisos y una nitidez sorprendente. <br><br> Además, nuestro televisor plasma incluye acceso integrado a las plataformas de streaming más populares, como Netflix, Amazon Prime Video, Disney+, y YouTube. Con solo unos pocos clics, podrá disfrutar de una amplia gama de películas, series, documentales y contenido exclusivo directamente en su televisor, sin necesidad de dispositivos adicionales.', -60);
 
infospot1.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 400px;">Disfrute de una experiencia visual inigualable con nuestro televisor de plasma de alta calidad. Este dispositivo ofrece una claridad de imagen excepcional y colores vibrantes que transformarán su entretenimiento en casa. Con una resolución Full HD, cada escena cobra vida con detalles precisos y una nitidez sorprendente. <br><br> Además, nuestro televisor plasma incluye acceso integrado a las plataformas de streaming más populares, como Netflix, Amazon Prime Video, Disney+, y YouTube. Con solo unos pocos clics, podrá disfrutar de una amplia gama de películas, series, documentales y contenido exclusivo directamente en su televisor, sin necesidad de dispositivos adicionales.</div>';
 
panorama.add(infospot1);
 
/* ***************** Zona Interacción #2 VENTANA***************** */
var infospot2 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot2.position.set(360 ,35 , -500);
infospot2.addHoverText('Disfruta de una experiencia única en nuestro hotel, donde cada habitación ofrece una vista espectacular que te dejará sin aliento. Desde panorámicas vistas a la ciudad de San José hasta majestuosos paisajes urbanos, cada ventana es un cuadro pintoresco que transformará tu estancia en una experiencia inolvidable. Déjate cautivar por la belleza natural que acompaña cada momento en nuestro exclusivo rincón de confort y lujo', -60);
infospot2.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 400px;">Disfruta de una experiencia única en nuestro hotel, donde cada habitación ofrece una vista espectacular que te dejará sin aliento. Desde panorámicas vistas a la ciudad de San José hasta majestuosos paisajes urbanos, cada ventana es un cuadro pintoresco que transformará tu estancia en una experiencia inolvidable. Déjate cautivar por la belleza natural que acompaña cada momento en nuestro exclusivo rincón de confort y lujo</div>';
 
panorama.add(infospot2);
 
/* ***************** Zona Interacción #3 ESCRITORIO ***************** */
var infospot3 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot3.position.set(-103 ,-172 , -500);
infospot3.addHoverText('En nuestro hotel, nos esforzamos por ofrecer a nuestros huéspedes la máxima comodidad y funcionalidad durante su estancia. Por ello, todas nuestras habitaciones están equipadas con un escritorio amplio y ergonómico, ideal para aquellos que necesitan trabajar o estudiar mientras se alojan con nosotros.', -60);
infospot3.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 400px;">En nuestro hotel, nos esforzamos por ofrecer a nuestros huéspedes la máxima comodidad y funcionalidad durante su estancia. Por ello, todas nuestras habitaciones están equipadas con un escritorio amplio y ergonómico, ideal para aquellos que necesitan trabajar o estudiar mientras se alojan con nosotros.</div>';
 
panorama.add(infospot3);


/* ***************** Zona Interacción #4 VIDEO ***************** */
var infospot4 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot4.position.set(481 ,51 , 500);
infospot4.addHoverText('', -60);
infospot4.element.innerHTML = `
    <div>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/yplb6RyZwZI?si=5AI6b4T7VOzhHwZt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
`;
panorama.add(infospot4);
 

/* ***************** Zona Interacción #5 ***************** */

var infospot5 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot5.position.set(-327 ,-95 , 499);
infospot5.addHoverText('En nuestro hotel, priorizamos su descanso con camas de alta calidad que garantizan una noche de sueño reparador. Nuestros colchones ergonómicos combinan soporte y suavidad, adaptándose a sus necesidades para ofrecer el máximo confort. Las almohadas y ropa de cama de lujo, hechas con tejidos suaves y transpirables, aseguran una experiencia de descanso inigualable. <br><br> Disfrute de un santuario de tranquilidad en nuestras habitaciones, despertándose renovado y lleno de energía. Ya sea por negocios o placer, nuestras camas de primera clase harán que su estancia sea excepcionalmente cómoda y placentera.', -60);
infospot5.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 400px;">En nuestro hotel, priorizamos su descanso con camas de alta calidad que garantizan una noche de sueño reparador. Nuestros colchones ergonómicos combinan soporte y suavidad, adaptándose a sus necesidades para ofrecer el máximo confort. Las almohadas y ropa de cama de lujo, hechas con tejidos suaves y transpirables, aseguran una experiencia de descanso inigualable. <br><br> Disfrute de un santuario de tranquilidad en nuestras habitaciones, despertándose renovado y lleno de energía. Ya sea por negocios o placer, nuestras camas de primera clase harán que su estancia sea excepcionalmente cómoda y placentera.';

panorama.add(infospot5);

/* ***************** Zona Interacción #6 AUDIO ***************** */

var infospot6 = new PANOLENS.Infospot(80, 'img/informacion.png');
infospot6.position.set(150 ,-64 , -500);
infospot6.addHoverText('' , -60);
infospot6.element.innerHTML = '<div style="color:#000; border-radius: 5px; padding: 10px; font-size: 18px; width: 600px;"><audio controls><source src="audios/birds.mp3" type="audio/mpeg"></audio></div>';


panorama.add(infospot6);


/* ***************** Zona Interacción #7 MESA DE NOCHE***************** */

var infospot7 = new PANOLENS.Infospot(50, 'img/informacion.png');
infospot7.position.set(-500 ,-359 , 37);
infospot7.addHoverText('Le ofrecemos un servicio a la habitación de primera clase para asegurar que su estancia sea lo más cómoda y conveniente posible. Ya sea que desee disfrutar de una comida deliciosa en la privacidad de su habitación, necesite artículos adicionales o tenga solicitudes especiales, nuestro equipo de servicio a la habitación está disponible las 24 horas del día para atender todas sus necesidades. Disfrute de una experiencia de hospitalidad personalizada sin tener que salir de la comodidad de su habitación.', -60);
infospot7.element.innerHTML = '<div style="background-color: rgba(64, 64, 64, 0.8); color:#fff; border-radius: 5px; padding: 10px; font-size: 16px; width: 400px;">Le ofrecemos un servicio a la habitación de primera clase para asegurar que su estancia sea lo más cómoda y conveniente posible. Ya sea que desee disfrutar de una comida deliciosa en la privacidad de su habitación, necesite artículos adicionales o tenga solicitudes especiales, nuestro equipo de servicio a la habitación está disponible las 24 horas del día para atender todas sus necesidades. Disfrute de una experiencia de hospitalidad personalizada sin tener que salir de la comodidad de su habitación.';

panorama.add(infospot7);


 
 
// Agregar la panorámica al visor
viewer = new PANOLENS.Viewer({ container: container });
viewer.add(panorama);









viewer.add(panorama);