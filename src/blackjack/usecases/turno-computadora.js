import { pedirCarta } from "./pedir-carta";
import { valorCarta } from "./valor-carta";
import { crearCarta } from "./crear-carta-html";


/**
 * Turno de la Computadora
 * @param {number} puntosMinimos el minimo necesario de la computadora para ganar o empatar el juego
 * @param {Array<string>} deck 
 * @param {HTMLElement} cartasComputadora 
 * @param {HTMLElement} puntaje 
 */


export const turnoComputadora = ( puntosMinimos, deck = [], cartasComputadora, puntaje  ) => {

    if ( !puntosMinimos ) throw new Error('puntosMinimos es requerido');
    if ( !puntaje ) throw new error ('puntaje es requerido');

    let puntosComputadora = 0;

    do {

        const carta = pedirCarta( deck );

        puntosComputadora = puntosComputadora + valorCarta(carta);

        puntaje.innerText = puntosComputadora;

        const imgCarta = crearCarta( carta );

        cartasComputadora.append( imgCarta );

        if( puntosMinimos > 21) {
            break;
        }

    } while  ( (puntosComputadora < puntosMinimos) && ( puntosMinimos <= 21 ) );

    setTimeout(() => {
        
        if( puntosComputadora === puntosMinimos ){
            alert('Juego Empatado');
        } else if ( puntosMinimos > 21 ){
            alert('Has perdido. Intenta de nuevo');
        } else if ( puntosComputadora > 21 ){ 
            alert('Has Ganado el juego! Felicidades!');
        } else if (( puntosMinimos === 21) && ( puntosComputadora < 21 ) ){
            alert('Has Ganado el juego! Felicidades!');
        } else if (( puntosMinimos < 21 ) && ( puntosComputadora > 21 )){
            alert('Has Ganado el juego! Felicidades!');
        } else {
            alert('Has perdido. Intenta de nuevo');
        }

    }, 200);

};
