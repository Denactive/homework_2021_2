// Турчин Денис
'use strict'


/**
 * Sorts letters of the given word. Capitalizes the first letter of the sorted letter sequence
 * 
 * @param {string} word - Initial word.
 * @return {string} word - Transformed word 
 */
const sortLettersCap = (word) => {
    let sorted_word = word.toLocaleLowerCase()
        .split('')
        .sort( (a, b) => a.localeCompare(b) )
        .join('');

    return sorted_word.charAt(0)
        .toLocaleUpperCase()
        .concat(sorted_word.slice(1));
}


/**
 * Sorts words spelling sequence by letters and sorts result sequences by words. Capitalizes the first letter of each new word
 * 
 * @param {string} sequence - Initial sentence.
 * @return {string} sequence - Transformed sequence 
 */
const sort = (sequence) => 
    sequence.split(' ')
        .map( (el) => sortLettersCap(el) )
        .sort( (a, b) => a.localeCompare(b) )
        .join(' ');
