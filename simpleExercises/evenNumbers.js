// number1 = 1;
// number2 = 10;
// let result;
// even();
// function even() {
//     result = ((number1 <= number2) && (number1 % 2 === 0)) ? number1
//     number1 = number1 + 1;
//     return result;
// }
// console.log(result);



number1 = 1;
number2 = 10;
let result;
evennumber(1, 10);
function evennumber() {
    if ((number1 <= number2) && (number1 % 2 === 0)) {
        result = number1;
        number1++;
    }

}
console.log(result);
