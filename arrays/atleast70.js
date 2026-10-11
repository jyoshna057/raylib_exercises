function atleast70(array) {
    let array2 = [];
    for (i = 0; i < array.length; i++) {
        if (array[i].marks > 70) {
            array2.push(array[i].name);
        }
    }
    return array2;
}
const array = [
    { name: "Anu", marks: 80 },
    { name: "Rahul", marks: 65 },
    { name: "Meera", marks: 91 },
    { name: "Vikram", marks: 72 },
];

console.log(atleast70(array));