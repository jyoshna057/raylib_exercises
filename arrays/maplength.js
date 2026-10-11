function mapLength(array) {
    const array2 = [];
    for (i = 0; i < array.length; i++) {
        array2.push(array[i].length);
        //array2.push(a);
    }

    return array2;
}
console.log(mapLength(["apple", "cat", "four"]));