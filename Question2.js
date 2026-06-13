// Array Methods
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
const multiplyByTwo = numbers.map(num => num * 2);

console.log(multiplyByTwo)
const filteredNumbers = numbers.filter(num => num > 25);
console.log(filteredNumbers)