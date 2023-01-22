


var showDevOn = false;

document.getElementById("btnDebugDevs").onclick = function(){

    /*
    Funcion que muestra informacion de debug dev, interes de desarrollador,
    solamente para mostrar como estan posicionadas las cajas.
    */

    
    let containersTotal = document.getElementsByClassName("boxContainerTotal");
    
    let containersMedium = document.getElementsByClassName("boxContainerMedium");

    showDevOn = !showDevOn;

    for(let i=0; i < containersTotal.length; i++){

        if(showDevOn){
            containersTotal[i].style.border = "1px solid pink";
        }else{
            containersTotal[i].style.border = "0px";
        }
    }

    for(let i=0; i < containersMedium.length; i++){
        
        if(showDevOn){
            containersMedium[i].style.border = "1px solid green";
        }else{
            containersMedium[i].style.border = "0px";
        }
    }

    /* ahora, el button que activo esta funcion se comporta como un checkbox, se le da estilo
    y se le quita si esta activado o no, ademas se muestra mas informacion o se oculta: */
    
    if(showDevOn){
        document.getElementById("btnDebugDevs").style.boxShadow = "2px 2px 3px springgreen,\
        -2px -2px 3px springgreen";
        document.getElementById("debugDevBox").style.display = "block";
    }else{
        document.getElementById("btnDebugDevs").style.boxShadow = "";
        
        document.getElementById("debugDevBox").style.display = "none";
    }

};








