

/**
 * 
 * @param {string} carta 
 * @returns {HTMLImageElement} imagen de la carta
 */

export const crearCarta = ( carta ) => {

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add( 'carta' );

    return imgCarta;

}
