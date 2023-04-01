
/**
 * 
 * @param {Array<string>} deck tiene que ser un arreglo string de cartas 
 * @returns {Array<String>} retorna la carta del deck
 */

export const pedirCarta = ( deck ) => {


    if( deck.length === 0 ){
        throw 'No hay cartas disponibles'
    };

   const carta = deck.pop();

    return carta;
};