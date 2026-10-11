function findIndex(array, element) {
    const array2 = [];
    for (i = 0; i < array.length; i++) {
        if (array[i] === element) {
            return (i);
        }
    }

}
const element = "tea";
const array1 = ["apple", "cake", "tea", "coffee", "tea"]
console.log(findIndex(array1, element));