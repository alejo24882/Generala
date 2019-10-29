var val =document.getElementById('NumJug')
var elem = document.getElementById('IncNombre')
var NumeroJugadores;


function JuegoNuevo() {// funcion para lanzar el primer popup
    document.getElementById ('overlay').classList.add('active');   
    document.getElementById('popup').classList.add('active');  
}
function cerrar(val1, val2) { // funcion para cerrar los PopUp
    document.getElementById (val1).classList.remove('active');
    document.getElementById(val2).classList.remove('active');

    
}
/*funcion para crear Jugadores */
function NombreJugadores(NumJug,Inc) {
    console.log(NumJug.value)
    if((NumJug.value>1)&&(NumJug.value<=4)){ 
        NumeroJugadores =parseInt(NumJug.value);               // Aqui validamos que el valor ingresado sea entre 2 y 4 jugadores
        cerrar('overlay','popup')                                            //cerramos el popup inicial    
        document.getElementById('overlay2').classList.add('overlay', 'active'); //Agregamos el style de el anterior pop
        document.getElementById('popup2').classList.add('popup','active');
        for (let i = 0; i < NumJug.value; i++) {    //aqui creamos los cada uno de los inputs de los jugadores
            var o = document.createElement('input');
            o.type = "text";
            o.id = "NomJug"+i;
            o.name = "NomJug"+i;
            o.value = "";
            o.placeholder = "Jugador "+(i+1);
            Inc.appendChild(o);
            console.log(document.getElementsByName('NomJug'+i))
            
        }
        
    }
    else{
        console.log('ingresa otro valor')
    }
     
}

function InicioJuego() {
    document.getElementById('btn-Contenedor').classList.add('ocultar');
    document.getElementById('Tablero').classList.remove('tabOcu');
    switch (NumeroJugadores) {
        case 2:
                document.getElementById('TabNomJug1').textContent = document.getElementById('NomJug0').value;
                document.getElementById('TabNomJug2').textContent = document.getElementById('NomJug1').value;
                
        break;
        case 3:
                document.getElementById('TabNomJug1').textContent = document.getElementById('NomJug0').value;
                document.getElementById('TabNomJug2').textContent = document.getElementById('NomJug1').value;
                document.getElementById('TabNomJug3').textContent = document.getElementById('NomJug2').value;
                
                document.getElementById('Tbr3').classList.remove('Tbr1');
        break;
        case 4:
                document.getElementById('TabNomJug1').textContent = document.getElementById('NomJug0').value;
                document.getElementById('TabNomJug2').textContent = document.getElementById('NomJug1').value;
                document.getElementById('TabNomJug3').textContent = document.getElementById('NomJug2').value;
                document.getElementById('TabNomJug4').textContent = document.getElementById('NomJug3').value;
                document.getElementById('Tbr3').classList.remove('Tbr1');
                document.getElementById('Tbr4').classList.remove('Tbr1');
            
        break;
        default:
                
            break;
    }
cerrar('overlay2','popup2')
  
}
function myFunction(val) {
    document.getElementById("total").value = 
    parseInt(document.getElementById('g1').value) + 
    parseInt(document.getElementById('g2').value) +
    parseInt(document.getElementById('g3').value) +
    parseInt(document.getElementById('g4').value) + 
    parseInt(document.getElementById('g5').value) +
    parseInt(document.getElementById('g6').value) +
    parseInt(document.getElementById('g7').value) +
    parseInt(document.getElementById('g8').value) +
    parseInt(document.getElementById('g9').value) +
    parseInt(document.getElementById('g10').value) ;
    document.getElementById("total2").value = 
    parseInt(document.getElementById('g11').value) + 
    parseInt(document.getElementById('g12').value) +
    parseInt(document.getElementById('g13').value) +
    parseInt(document.getElementById('g14').value) + 
    parseInt(document.getElementById('g15').value) +
    parseInt(document.getElementById('g16').value) +
    parseInt(document.getElementById('g17').value) +
    parseInt(document.getElementById('g18').value) +
    parseInt(document.getElementById('g19').value) +
    parseInt(document.getElementById('g110').value) ;
    document.getElementById("total3").value = 
    parseInt(document.getElementById('g21').value) + 
    parseInt(document.getElementById('g22').value) +
    parseInt(document.getElementById('g23').value) +
    parseInt(document.getElementById('g24').value) + 
    parseInt(document.getElementById('g25').value) +
    parseInt(document.getElementById('g26').value) +
    parseInt(document.getElementById('g27').value) +
    parseInt(document.getElementById('g28').value) +
    parseInt(document.getElementById('g29').value) +
    parseInt(document.getElementById('g210').value) ;
    document.getElementById("total4").value = 
    parseInt(document.getElementById('g31').value) + 
    parseInt(document.getElementById('g32').value) +
    parseInt(document.getElementById('g33').value) +
    parseInt(document.getElementById('g34').value) + 
    parseInt(document.getElementById('g35').value) +
    parseInt(document.getElementById('g36').value) +
    parseInt(document.getElementById('g37').value) +
    parseInt(document.getElementById('g38').value) +
    parseInt(document.getElementById('g39').value) +
    parseInt(document.getElementById('g310').value) ;
    }





