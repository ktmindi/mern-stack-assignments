//npx create-react-app react-intro(name-of-app)


//what are higher order functions? 
// they are essentially built in javascript functions that allow us to interact specifically with arrays 
//Higher Order Functions work on Arrays EXCLUSIVELY 

// MAP AND FILTER ARE THE TWO WE WILL USE THE MOST IN REACT 

//going to look at a use case -- how do we write this in regular java and then how do we do it in a higher order function. 

let arr1 = [2,3,12,14,23]

// 1]  lets say i wanted to loop through this array and print out the index position number of each item
//in regular javascript we would write:
for (let i=0;i<arr1.length;i++){
    console.log(`Index:${i} Value:${arr1[i]}`)
}
//string interpolation will allow us to add variables in so INSTEAD OF QUOTES "" WE WILL USE BACKTICKS ``

//same thing but now we will use a higher order function 
//forEach item in this array i want to do something  >> so this built in function knows that whatever i call the first parameter is going to represent the item i am looping through, the second one is going to represent the index position of that item
// => {} call back function -- when i run this whatever is in the call back function is what will happen to each part of this array
arr1.forEach((element,index) =>{
    console.log(`Index:${i} Value:${arr1[i]}`)
})
//kind of a glorified for loop.


// 2] we want to loop through the array and do an operation on each item ~ we want to multiply each item by 2 
let arr2 = [4,7,11,22,34]

//regular js
for (let i=0;i<arr1.length;i++){
    arr2[i] *= 2
}
console.log(arr2)

//now we will do higher order function
//when we use .map we are not changing the original array 
//.map is going to return a new copy of the same array so its going to work on the array but its going to give us a copy. so it will give us back a different array

//so we will have to store the new copy in a variable by starting our function with const nameofvariable = arr1.map ....
//also if we use curly brackets we need to have a return statement
//arr1.map((element) =>{
//    return element*2 
//})
//if we use parenthesis we do not need the return statement 
const multiply = arr2.map((element) => (
    element*2
))
console.log(multiply)
//because this is only one line code we can also do implicit return and take out the parenthesis like so 
// const mulitply = arr2.map((element) => element*2)

// .map is used whenever we want to do the same operation on each of the items in the array


// 3] we want to go thru the array and want to remove all the numbers that are odd in this array
//modulo = % sign 
// 10 % 3 = 1 
// modulo means divide the number on the left with the number on the right and the result is the remainder 
//10 % 2 = 0 
let arr3 = [1,22,23,34,15,27]
//for this we should create a new array because if we remove a number from the middle of the array we would have to move all the numbers over.. soo we will create a new array and for any even numbers we will put into the new array
let newArr = []
for (let i=0;i<arr3.length;i++){
    if(arr3[i] % 2 == 0){
        newArr.push(arr3[i])
    }
}
console.log(newArr)
//we created a new array that only has the even numbers

//how we will use a higher order function
//does not always have to be called element -- its just going to refer to what we are working on
const newArr2 = arr3.filter((num) => (
    num % 2 == 0
))
console.log(newArr2)



// 4] We want to add all of the items in our array together
let arr4 = [2,31,12,33,16]
let sum = 0 //if i put it inside the loop everytime the loop resets it will reset the sum to 0 and we dont want that so we put this outside
for(let i=0;i<arr4.length;i++){
    sum += arr4[i]
}
console.log(sum)
//higher order function
//first argument we can pass in here is called an accumulator which is pretty much the same thing as our let sum = 0 variable above.
//second is the actual value which we can call anything like element or num, then we can pass in index if we want but dont have too
const sum2 = arr4.reduce((acc,num) =>(
    acc + num
))
console.log(sum2)



//MAP -- OFTEN USED -- WE WILL MAP THROUGH THE ITEMS IN AN ARRAY AND FOR EACH ITEM WE WILL RENDER A REACT COMPONENT WHICH IS WHAT ARRON SHOWED US LAST WEEK. 
//WE CAN RENDER A COMPONENT 

//MAP -- TO RENDER A LIST OF ITEMS ON A PAGE WITHIN A COMPONENT -- SO IF WE HAVE A LIST OF USERS OR SOMETHING WE CAN USE MAP TO RENDER OUT THE LIST OF USERS INSTEAD OF A WHOLE COMPONENT WE MIGHT JUST RENDER A PIECE OF IT