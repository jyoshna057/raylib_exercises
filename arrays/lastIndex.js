function lastIndex(array, element) {
    for (i = array.length - 1; i > 0; i--) {
        if (array[i] === element) {
            return (i);
        }

    }
}
const element = "tea";
const array1 = ["apple", "tea", "cake", "coffee", "tea"]
console.log(lastIndex(array1, element));