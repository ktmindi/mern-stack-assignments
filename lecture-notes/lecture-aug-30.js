//variables hold data 

//data types: STRINGS, NUMBERS/INTEGERS, BOOLEAN VALUES
// these will be the three we see most often 
var myString = "This is a string"
var myNum = 10
var goodInternetConnection = false

//data structures - more complex ways we can store data: ARRAYS and OBJECTS [in python we have lists and dictionaries same thing but different language]


// arrays use []
var myArr = [10, "string", false, 100, 39] 
//can store any data type i want 
//a unique feature about arrays is we know the values but the computer does not so if we want to access a value we can think about it like each item in the array is behind a closed door and we need to call on that index to open the door and see the value
console.log(myArr[1]) //remember to save the file before pressing the play button at the top right corner or the code will not run as you expect it to


//there are alot of built in functions that allow for optimal utilization of arrays - worth brushing up on 
//.push() WILL ADD WHATEVER WE INPUT TO THE END OF OUR ARRAY NEVER THE BEGINNING
//.pop() WILL REMOVE WHATEVER IS AT THE END OF OUR ARRAY
//.shift()
//.unshift()

myArr.push(95)
console.log(myArr)

myArr.pop()
console.log(myArr)

// objects are the second data structure and are defined by using curly brackets {}
var myObj = {
    firstName:'Cool',
    lastName:'Dude',
    email:'cooldude@gmail.com'
}

//to access values in an object
console.log(myObj.firstName)
console.log(myObj['lastName']) //not common but works 

//ES5 Syntax older syntax -- var is old syntax
//ES6 Syntax is newer syntax -- let and const are what we will use to create variables

let myNum2 = 20 // more flexible - mutable
console.log(myNum2)
myNum2 = 50
console.log(myNum2)
//as we can see here - we were able to change the variable from having a value of 20 to a value of 50

const myNum3 = 30 // not flexible, once declared you cannot change it - unmutable
console.log(myNum3)

// if we input the following line as code ***
//myNum3 = 60     // will give us a TypeError: Assignment to constant variable 
console.log(myNum3)


const myObj2 = {
    firstName:'Hey',
    lastName:'Ya',
    email:'outkast@google.com'
}

//myObj2 = ['hey', 'ya', 'outkast@google.com'] 
// will give us a TypeError: Assignment to constant variable
// this is because you cannot change the data structure from an object to an array using const 

//HOWEVER you can change the parameters inside a const object like so
myObj2.firstName = 'No Way'
console.log(myObj2.firstName)

console.log(myObj2)

// we will mostly use CONST especially when using react 

//ES5 functions we would say something like this where the parameters of the function will go inside the parenthesis -- and what the function does will go between the curly brackets 
//function definition
function myFunct(parameter1, parameter2) {
    return parameter1*parameter2;
    //your code goes here - what the function will do
};
// remember that in order to run your function you have to call on your function -- leaving the code like so and running it will not do anything

// to run the function we would write out something like the following line of code. and make sure we pass in the parameters needed to meet the requirements of our function.
var y = myFunct(3,2)
console.log(y)

//ES6 syntax for functions called ARROW FUNCTIONS
//first store our function into a variable 
//parameters still go into the parenthesis

//const myArrowFunction = (param1, param2) => {
    //your code goes here
//}
//still call the function and run the function the same way

//lets say we have a function that takes in two numbers and multiplies them 
//what we can do here is something called IMPLICIT RETURN
// implicit return [whenever we have a function that does ONE SINGLE THING] we can write our function like so
const myArrowFunction = (param1, param2) => param1 * param2
console.log(myArrowFunction(2,5))
//and it will implicitly return whatever we do after the =>
//implicit return does not require curly brackets

//if however we have a function that does more than one thing like the function below 
const myArrowFun2 = (p1, p2) => {
    console.log(p1,p2)
    p1 * p2
}
console.log(myArrowFun2(2,5))
//the output will be
// 2 5
// undefined -- This is because nothing has been returned 
//so whenever we have the curly brackets we need to make sure we actually specify what we are returning from the function by having the RETURN KEYword infront of line 108 like the following:
const myArrowFun3 = (p1, p2) => {
    console.log(p1,p2)
    return p1 * p2
}
console.log(myArrowFun3(2,5))

//DESTRUCTURING - a pattern of pulling values out of a data structure like an object or an array [will make more sense when we get to react] it will look something like the following

var myObj3 = {
    firstName:'Bob',
    lastName:'Saget',
    email:'fullerhouse@aol.com'
}

//start on the right and you work to the left
const {firstName,email} = myObj3
console.log(myObj3.firstName)

//again destructuring is a syntax to allow us to pull values out of an obj and store them into their own variables so we dont have to always be referencing the object first
//this is the main use of destructuring



//we can also destructure arrays but its more unlikely that we would do this
//to deconstruct an array we would use square brackets and we dont have names for the items in our array we have indexes so we give our variables names

var myArr2 = [10,'string', 200,false,39]
const [var1,var2,var3] = myArr2
console.log(var1,var2,var3)
//output here is 10, string, 200


//if we add a comma we can shift it over by one like so
var myArr3 = [10,'string', 200,false,39]
const [vari1,,vari2,vari3] = myArr2
console.log(vari1,vari2,vari3)
//and the output will now skip over 'string' and give us 10 200 false 


//SPREAD AND REST OPERATOR
//we can use this when we want to make a copy of an object -- it allows us to spread out everything in a datastructure and make sure its included.

const copy = {...myObj3} //im creating a variable called copy of myObj3 object 
console.log(copy)
//spread is more common


//REST OPERATOR 
//lets say we are deconstructing an array 
var myArr4 = [10,'string', 200,false,39]
const [varis1,varis2,...varis3] = myArr4 //by inserting the three dots before the last variable i am adding the remaining items of the array into a variable called varis3
console.log(varis1,varis2,varis3)
//output will be 10 string [200, false, 39]
//varis3 = an array that includes 200, false, 39