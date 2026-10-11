function selectOdds(array) {
    const array2 = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] % 2 != 0) {
            array2.push(array[i]);
        }
    }
    return array2;
}
console.log(selectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));