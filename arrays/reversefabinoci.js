function calculate(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    let result = calculate(n - 2) + calculate(n - 1);
    return result;
}
function fabinoci(n) {
    let array1 = [];
    for (let i = n; i >= 0; i--) {
        array1.push(calculate(i));
    }
    return array1;
}
console.log(fabinoci(5));