window.onload = function () {
    document.getElementById("output-img").innerHTML =
      "<img src='img/LOGO.png' class='img-fluid rounded' alt='logo' id='logo-img' />";
  
    //evento que permite cambiar el objeto onchange
    document.getElementById("treatmentCombo").onchange = function (e) {
      //destino del valor seleccionado por el usuario
      let n = e.target.value;
      //expresiones que guardan las imagenes de los estadios y la informacion de cada uno...
      let imagen = "<img src='img/combo1/" + n + ".jpg' class='img-fluid img-thumbnail rounded' />";
  
      //Cada tratamiento
      let text = [
        {
          title: "Odontología preventiva - Especialista Dr. Vargas",
          description:
            "Este tratamiento se enfoca en el mantenimiento de una buena salud bucal mediante controles regulares y limpiezas para prevenir caries y enfermedades de las encías. Se recomienda realizar este tipo de control 2 veces al año para tener una salud bucodental en perfectas condiciones",
        },
        {
          title: "Odontología restauradora - Especialista Dra. Gómez",
          description:
            "Incluye tratamientos como empastes y coronas para restaurar dientes dañados, mejorando tanto la salud bucal como la apariencia. Además ofrecemos el servicio de implantes dentales de alta gama, para mejorar la estetica de su sonrisa y la funcionalidad de su mordida.",
        },
        {
          title: "Emergencias dentales - Especialista Dr. Aguirre",
          description:
            "Ofrecemos atención rápida y efectiva para problemas dentales urgentes como dolores severos, fracturas dentales, extracciones de emergencia y abscesos.",
        },
        {
          title: "Ortodoncia Invisaling - Dra. Mora",
          description:
            "Esta moderna técnica de ortodoncia utiliza alineadores transparentes para corregir la alineación dental sin necesidad de brackets metálicos. Sin sufrimiento ni incomodos aparatos dentales, puede tener la sonrisa de sus sueños y a un precio muy razonable.",
        },
        {
          title: "Cosmética dental - Especialista Dr. Vargas",
          description:
            "Procedimientos diseñados para mejorar la apariencia de su sonrisa, incluyendo carillas, contorneado dental y más. Luzca una sonrisa digna del salón de la fama de Hollywood, los famosos se realizan este tipo de tratamientos, escoja la forma y color de sus dientes, presumiendo una sonrisa de 5 estrellas",
        },
        {
          title: "Blanqueamiento - Especialista Dr. Aguirre",
          description:
            "Un tratamiento para aclarar los dientes y eliminar manchas, logrando una sonrisa más brillante y atractiva. Con tecnología de punta, y sin maltratar su dentadura.",
        },
      ];
  
      // Construcción del contenido HTML
      let selectedTreatment = text[n - 1];
      let htmlContent = `
          <h3>${selectedTreatment.title}</h3>
          <p>${selectedTreatment.description}</p>
      `;
  
      //Salida de las imágenes y los textos informativos...
      document.getElementById("output-img").innerHTML = imagen;
      document.getElementById("output-txt").innerHTML = htmlContent; // Correcta asignación del contenido HTML
    };
  
    //funcion del boton Reiniciar
    document.getElementById("btn-clean").onclick = function () {
      document.getElementById("output-img").innerHTML =
        "<img src='img/LOGO.png' class='img-fluid rounded' alt='logo' />";
      //limpia los textos informativos de los estadios
      document.getElementById("output-txt").innerHTML = "";
      //dejar el select con el texto por defecto..
      document.getElementById("treatmentCombo").value = ""; // Cambio de ID al correcto
    };
  };
  