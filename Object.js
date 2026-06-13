const student = {
    name: "Rahim",
    age: 22
}
console.log(student.name)
console.log(student.age)
const keys = Object.keys(student);
console.log(keys)
const hasAge = 'age' in student;
console.log(hasAge)
