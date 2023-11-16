document.addEventListener("DOMContentLoaded", () => {
    console.log("ya cargo todo el html");
});

// DOM del juego

// variables

const jugadas = {
    rock: document.getElementById("rock"),
    paper: document.getElementById("paper"),
    scissors: document.getElementById("scissors")
};

const desiciones = ["", "", ""];

const turnos = [1,2];

function jugar(){



    if(piedra){
        desiciones[0] = "piedra";
        turnos[0] = desiciones[0];
    } else if(papel){
        desiciones[1] = "papel";
        turnos[0] = desiciones[1];
    } else if(tijeras){
        desiciones[2] = "tijeras";
        turnos[0] = desiciones[2];
    }

    desiciones.forEach(desiciones => {
        console.log(desiciones);
    });

}

function piedra(){
    console.log("piedra");
    jugar();
}

jugadas.rock.addEventListener("click", piedra);

function papel(){
    console.log("papel"); 
    jugar();
}

jugadas.paper.addEventListener("click", papel);

function tijeras(){
    console.log("tijeras");
    jugar();
}

jugadas.scissors.addEventListener("click", tijeras);


