// Турчин Денис

const sort = (sequence) => {

    const firstToUpperAndSort = (word) => {
        // localeCompare позволяет делать исключение при сортировке буквы "ё", код юникода которой - максимальный среди русских букв
        let sorted_word = word.toLocaleLowerCase()
            .split('')
            .sort( (a, b) => a.localeCompare(b) )
            .join('');

        return sorted_word.charAt(0)
            .toLocaleUpperCase()
            .concat(sorted_word.slice(1))
    }

    return sequence.split(' ')
        .map( (el) => firstToUpperAndSort(el) )
        .sort( (a, b) => a.localeCompare(b) )
        .join(' ')
}