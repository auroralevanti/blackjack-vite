import _ from 'underscore';


/**
 * Esta función crea un nuevo deck
 * @param {array<string>} palosDeCartas Estos: [ 'C', 'D', 'H', 'S' ]
 * @param {Array} letrasDeCartas Estos: [ 'A', 'J', 'Q', 'K' ]
 * @returns {Array} regresa un nuevo deck de cartas
 */

export const crearDeck = ( palosDeCartas, letrasDeCartas ) => {

    if ( !palosDeCartas || palosDeCartas === 0 ) 
        throw new Error('palosDeCartas es obligatorio y debe ser un arreglo de string');

    if ( !letrasDeCartas || letrasDeCartas === 0 ) 
        throw new Error('letrasDeCartas es obligatorio y debe ser un arreglo de string');

    let deck= [];

    for( let i = 2; i <= 10; i++ )
        for( let tipo of palosDeCartas) {
            deck.push( i + tipo );
        };

    for( let especiales of letrasDeCartas) 
        for(let tipo of palosDeCartas) {
            deck.push(especiales + tipo)
        };

    deck = _.shuffle(deck);


    return deck;
    
};