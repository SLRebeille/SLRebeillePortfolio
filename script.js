function seleccionar(link) {
    var opciones = document.querySelectorAll('#links a');
    opciones [0].className = "";
    opciones [1].className = "";
    opciones [2].className = "";
    opciones [3].className = "";
    opciones [4].className = "";
    link.className = "seleccionado";

    var x = dcument.getElementById("nav");
    x.className = "";
}

function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className===""){
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

window.onscroll = function(){
    efectoHabilidades()
};

function efectoHabilidades(){
    var porcentaje = document.getElementById("porcentaje");
    var distancia_porcentaje = window.innerHeight - porcentaje.getBoundingClientRect().top;
    if (distancia_porcentaje >= 300) {
        document.getElementById("1").classList.add("barra-progreso1");
        document.getElementById("2").classList.add("barra-progreso2");
        document.getElementById("3").classList.add("barra-progreso3");
        document.getElementById("4").classList.add("barra-progreso4");
    }
}