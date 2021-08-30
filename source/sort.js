// Турчин Денис
'use strict'


/**
 * Sorts letters of the given word. Capitalizes the first letter of the sorted letter sequence
 * 
 * @param {string} word - Initial word.
 * @return {string} word - Transformed word 
 */
const sortLettersCap = (word) => {
    const sortedWord = word.toLocaleLowerCase()
        .split('')
        .sort((a, b) => a.localeCompare(b))
        .join('');

    return sortedWord.charAt(0)
        .toLocaleUpperCase()
        .concat(sortedWord.slice(1));
}


/**
 * Sorts words spelling sequence by letters and sorts result sequences by words. Capitalizes the first letter of each new word
 * 
 * @param {string} sequence - Initial sentence.
 * @return {string} sequence - Transformed sequence 
 */
const sort = (sequence) => 
    sequence.split(' ')
        .map((word) => sortLettersCap(word))
        .sort((a, b) => a.localeCompare(b))
        .join(' ');
