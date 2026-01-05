const numbers = [45, 4, 9, 16, 25];
// let sum = 0
// let newArray = numbers.map((number, index) => {
//     return [number, number + 5];
// })
// console.log(newArray);
// let flatArray = newArray.flat();
// console.log(flatArray);

let filteredArray = numbers.filter(number => {
    return numbers.sort((a, b) => a - b)
});
// console.log(filteredArray);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.reverse());