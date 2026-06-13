const sumFunction = (...numbers) => {
    return numbers.reduce((total, current) => total + current, 0);
}
const a = 10 , b = 20 , c = 30
console.log(a,b,c)
const result = sumFunction(a,b,c)
console.log(result)