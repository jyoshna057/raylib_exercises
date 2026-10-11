function filterAbove(array, thredshold) {
    const array2 = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] > thredshold) {
            array2.push(array[i]);
            //return array2;
        }
        //array2.push(a);
    }

    return array2;
}
const thredshold = 3;
console.log(filterAbove([1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 99], thredshold));