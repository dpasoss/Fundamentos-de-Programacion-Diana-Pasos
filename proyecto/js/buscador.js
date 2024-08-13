'use strict';

function searchClinic() {

    let searchInput = document.getElementById("searchInput").value.toLowerCase();

    let oesteClinic = ["Escazu", "Santa Ana", "Lindora", "Ciudad Colon", "Sabana"];

    let esteClinic = ["Curridabat", "Sabanilla", "Barrio Escalante"];

    let storeImages = {
        "escazu": "img/s1.jpg",
        "santa ana": "img/s2.jpg",
        "lindora": "img/s3.jpg",
        "ciudad colon": "img/s4.jpg",
        "sabana": "img/s5.jpg",
        "curridabat": "img/s6.jpg",
        "sabanilla": "img/s7.jpg",
        "barrio escalante": "img/s8.jpg",
    };

    let cityTexts = {
        "escazu": "Sede Escazú le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br>Teléfono: 2230-9800 <br> <br>Dirección: De multiplaza de Escazú 300mts oeste, 100 norte, centro comercial Escazú. ",

        "santa ana": "Sede Ana le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2230-9900 <br> <br> Dirección: De la Cruz Roja de Santa Ana, 500mts oeste, 200norte y 25 este, contiguo al Vindi.",

        "lindora": "Sede Lindora le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2230-9700 <br> <br> Dirección: Del cruce de Lindora, 600m al oeste, contiguo al KFC.",

        "ciudad colon": "Sede Ciudad Colón le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2230-9600 <br> <br> Dirección: Del Parque de Ciudad Colón, 200m al este.",

        "sabana": "Sede la Sabana le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2295-9700 <br> <br> Dirección: De la agencia Datsun 120mts al oeste contiguo al Teatro Arnoldo Herrera.",

        "curridabat": "Sede Curridabat le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2295-9500  <br> <br> Dirección: Del Colegio Sek, 300m suroeste, contiguo al Macdonalds, Guayabos.",

        "sabanilla": "Sede Sabanilla le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2287-9500 <br> <br> Dirección: Centro comercial el Cristo, loca 32",

        "barrio escalante": "Sede Sabanilla le atiende en un horario de L-V de 9:00am a 7:00pm y Sábados de 9:00am a 2:00pm, <br> <br> Teléfono: 2287-9500  <br> <br> Dirección: Del Parque Fracia, 300m al oeste. "
    };

    let filteredClinic = [];

    let allClinic = [...oesteClinic, ...esteClinic];

    if (searchInput === "") {
        swal.fire({
            icon: "error",
            title: "Verificar la entrada de datos",
            confirmButtonText: "Ingrese el nombre de una ciudad",
            confirmButtonColor: "#0063be",
        });
        return;
    }

    for (let i = 0; i < allClinic.length; i++) {
        if (allClinic[i].toLowerCase().includes(searchInput)) {
            // si hay coincidencia, asigna la tienda actual al arreglo filteredClinic
            filteredClinic = [allClinic[i]];
            // termina el bucle, ya que se encontró una coincidencia para que no siga iteractuando y consumiendo memoria
            break;
        }
    }

    if (filteredClinic.length === 0) {
        if (searchInput === "oeste") {
            filteredClinic = oesteClinic;
        } else if (searchInput === "escazu") {
            filteredClinic = oesteClinic;
        } else if (searchInput === "santa ana") {
            filteredClinic = oesteClinic;
        } else if (searchInput === "lindora") {
            filteredClinic = oesteClinic;
        } else if (searchInput === "ciudad colon") {
            filteredClinic = oesteClinic;
        }
    }

    displayResults(filteredClinic, storeImages, cityTexts);
}

function displayResults(clinic, storeImages, cityTexts) {
    let resultsContainer = document.getElementById("pResult");
    resultsContainer.innerHTML = "";

    if (clinic.length === 0) {
        resultsContainer.innerHTML = "<p>No se encontraron tiendas para la ubicación escrita.</p>";
    } else {
        for (let i = 0; i < clinic.length; i++) {
            let cityName = clinic[i].toLowerCase();
            let imageSrc = storeImages[cityName] || "ruta_por_defecto.jpg";
            let cityText = cityTexts[cityName] || "Información no disponible.";

            let card = document.createElement("div");
            card.className = "card mb-3";
            card.style.maxWidth = "100%";
            card.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${imageSrc}" class="img-fluid rounded-start" alt="Clínica ${clinic[i]}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">Clínica ${clinic[i]}</h5>
                            <p class="card-text">${cityText}</p>
                        </div>
                    </div>
                </div>
            `;

            resultsContainer.appendChild(card);
        }
    }
}
