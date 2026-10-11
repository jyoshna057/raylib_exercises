const principalAmount = 1000;
const rateOfIntrest = 5;
const Time = 2;
function simpleIntrest() {
    x = ((principalAmount * rateOfIntrest * Time) / 100);
    return x;
}
console.log(simpleIntrest());