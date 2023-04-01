

/**
 * 
 * @param {string} carta es la combinacion de palos con especiales
 * @returns {number} la carta a mostrar
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length -1);
    
    return ( isNaN( valor)) ?
                (valor === 'A') ? 11 : 10
            : valor * 1;

};