import './style.css';
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

const crearDeck = () => {

    for( let i = 2; i <= 10; i++ )
        for( let tipo of palos) {
            deck.push( i + tipo );
        };

    for( let especiales of letras) 
        for(let tipo of palos) {
            deck.push(especiales + tipo)
        };



    deck = _.shuffle(deck);
    //console.log(deck);

    return deck;
    
};

crearDeck ();




const pedirCarta = () => {

    if( deck.length === 0 ){
        throw 'No hay cartas disponibles'
    };

   const carta = deck.pop();

//    console.log(deck);
//    console.log(carta);

    return carta;
};


    const valorCarta = ( carta ) => {

        const valor = carta.substring(0, carta.length -1);
        
        return ( isNaN( valor)) ?
                    (valor === 'A') ? 11 : 10
                : valor * 1;
   
    };

//Turno de la Computadora

const turnoComputadora = ( puntosMinimos ) => {

    do {

        const carta = pedirCarta();

        puntosComputadora = puntosComputadora + valorCarta(carta);

        puntaje[1].innerText = puntosComputadora;

        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${carta}.png`;
        imgCarta.classList.add( 'carta' );

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

//Eventos

botonPedir.addEventListener( 'click', () => {

    const carta = pedirCarta();

    puntosJugador = puntosJugador + valorCarta(carta);
    
    puntaje[0].innerText = puntosJugador;

    // Agregar la carta de forma dinamica

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add( 'carta' );

    cartasJugador.append( imgCarta );

    if( puntosJugador > 21 ){
    console.warn('Lo siento mucho, perdiste');
    botonDetener.disabled = true;
    botonPedir.disabled = true;
    turnoComputadora( puntosJugador );

    } else if ( puntosJugador === 21) {
    console.warn('Obtienes 21!');
    botonDetener.disabled = true;
    botonPedir.disabled = true;
    turnoComputadora( puntosJugador );
    }

    

} );

botonDetener.addEventListener( 'click' , () =>{
   
        botonPedir.disabled = true;
        botonDetener.disabled = true;
        turnoComputadora( puntosJugador );

    
});

botonNuevoJuego.addEventListener('click', () => {

    deck = [];
    deck = crearDeck();
    botonDetener.disabled = false;
    botonPedir.disabled = false;
    puntosJugador = 0;
    puntosComputadora = 0;
    puntaje[0].innerText = 0;
    puntaje[1].innerText = 0;
    cartasJugador.innerHTML = '';
    cartasComputadora.innerHTML = '';

});