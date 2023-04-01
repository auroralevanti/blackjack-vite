import { crearDeck, pedirCarta, valorCarta, turnoComputadora, crearCarta } from './usecases';

import _ from 'underscore';

let deck = [];
const palos = [ 'C', 'D', 'H', 'S' ];
const letras = [ 'A', 'J', 'Q', 'K' ];

let puntosJugador = 0;
let puntosComputadora = 0;

//Referencias HTML

const botonPedir = document.querySelector('#pedirCarta');
const botonDetener = document.querySelector('#detener');
const botonNuevoJuego = document.querySelector('#nuevoJuego');

const cartasJugador = document.querySelector('#jugador-cartas');
const cartasComputadora = document.querySelector('#computadora-cartas');
const puntaje = document.querySelectorAll('small');


deck = crearDeck ( palos, letras );

//Eventos

botonPedir.addEventListener( 'click', () => {

    const carta = pedirCarta( deck );

    puntosJugador = puntosJugador + valorCarta(carta);
    
    puntaje[0].innerText = puntosJugador;

    // Agregar la carta de forma dinamica

    const imgCarta = crearCarta( carta );
    cartasJugador.append( imgCarta );

    if( puntosJugador > 21 ){
    console.warn('Lo siento mucho, perdiste');
    botonDetener.disabled = true;
    botonPedir.disabled = true;
    turnoComputadora( puntosJugador, deck, cartasComputadora, puntaje[1] );

    } else if ( puntosJugador === 21) {
    console.warn('Obtienes 21!');
    botonDetener.disabled = true;
    botonPedir.disabled = true;
    turnoComputadora( puntosJugador, deck, cartasComputadora, puntaje[1] );
    }

    

} );

botonDetener.addEventListener( 'click' , () =>{
   
        botonPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputadora( puntosJugador, deck, cartasComputadora, puntaje[1] );

    
});

botonNuevoJuego.addEventListener('click', () => {

    deck = [];
    deck = crearDeck( palos, letras );
    botonDetener.disabled = false;
    botonPedir.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    puntaje[0].innerText = 0;
    puntaje[1].innerText = 0;
    cartasJugador.innerHTML = '';
    cartasComputadora.innerHTML = '';

});