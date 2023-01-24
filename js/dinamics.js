


function showContentContainer(idButton, idElementContainer){

    /* muestra un frame/marco/container o lo oculta */

    if( document.getElementById(idElementContainer).style.display != "none"){
        //console.log("No esta oculto, ocultar");
        document.getElementById(idElementContainer).style.display = "none";
        document.getElementById(idButton).innerHTML = "Mostrar";
    }else{
        //console.log("si esta oculto, mostrar");
        document.getElementById(idElementContainer).style.display = "block";
        document.getElementById(idButton).innerHTML = "Ocultar";
    }
}

document.getElementById("btnShowPInfo").onclick = function(){
    showContentContainer("btnShowPInfo", "personalInfo");
};



