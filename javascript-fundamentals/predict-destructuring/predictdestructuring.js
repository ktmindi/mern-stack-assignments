//PROBLEM ONE
//PREDICTION
// console.log(randomCar) will output Tesla
// console.log(otherRandomCar) will output Mercedes 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
console.log(randomCar)
console.log(otherRandomCar)
//ACTUAL
//Tesla
//Mercedes

//PROBLEM TWO
//PREDICTION
//error or no output
//Elon
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//console.log(name);
console.log(otherName);
//ACTUAL
//name is not defined
//Elon

//PROBLEM THREE
//PREDICTION
//12345
//undefined
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
console.log(password);
console.log(hashedPassword);
//ACTUAL
//12345
//undefined

//PROBLEM FOUR
//PREDICTION
// 2 = 5
// 2 = 2
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
console.log(first == second);
console.log(first == third);
//ACTUAL
//false
//true

//PROBLEM FIVE
//PREDICTION
//value
//[1,5,1,8,3,3]
//1
//5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
//ACTUAL
//value
//[1,5,1,8,3,3] 
//1
//5

