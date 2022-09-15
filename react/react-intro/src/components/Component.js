//will use arrow ES6 to build functions
//name of the function, file name, and name of export should all be the same 

// what we always start with will be :
//const Component = () => {

//    return(
//      we will return HTML in this component so we can put divs in here
//    )
//}


//export default Component;
//this is really the basics of a component we have a function, a return statement that returns HTML, and an export statement

//import Comp2 from './Comp2' //because i am already in the component folder we only need to write DOT SLASH and name of the file whereas when we were importing to the app.js file we had to write DOT SLASH/folder the file is in/file name 

//const Component = () => {

//    return(
//        <div>
//            <h1 className="my-class">Hello World</h1>
//            <h2>more info</h2>
//            <ul><li>1</li></ul>
//            <Comp2 />
//        </div>
//    ) //JSX is transpiled into ES5 Javascript using Babel
//}

//export default Component;

//after the component is created, we go to our app.js file and import this component

//background knowledge - the HTML that we have written here in the return of our function is technically not HTML
// its considered JSX syntactic sugar meaning >> we're not writing HTML were writing something like HTML and then when we actually run this code its transpiled into ES5 javascript bc thats the most compatable version of js for all modern web browsers
//so when our app runs all of our compoennts are turned into a version of js 

//DIFFERENCE FOR JSX !!! when we write css we write <h1 class=""> but inside JSX we have to write <h1 className=""> because in JSX class is used for something else
//app.css file is already included so whenever we have css we can just go to the app.css file and add some css in

//to use bootstrap you just go into the public folder > index.html > add the bootstrap link > and then you can use bootstrap

//cool thing about components is that they are reusable so if we go into our app.js file and put <Component /> three times and save it we will see hello world 3 times on the web browser

//so our components can be as big as a whole page of code or as little as a button >> and that way wherever we need that button we can just paste it there so less repetitive code


// our return must be within ONE SINGLE <div> or <> or we will get an error

//LECTURE 9-1

import Comp2 from './Comp2'

const Component = (props) => {

    const {myData,message} = props

    return(
        <div className="my-class">
            <h1>Hello World</h1>
            <h2>{myData}</h2>
            <h2>{message}</h2>
            <Comp2 myDataCanBeAnyNameHere={myData} message={message} />
        </div>
    ) 
}

export default Component;

//1)in our child component the first thing we do is pass props in as a parameter to the function -- this is how we can recieve the props object into this component to use it 
// now this is where DESTRUCTURING comes into place
//i want to be able to use the value i passed in our component hhere as part of our HTML SO
// im  going to DESTRUCTURE -OR- pull values out of the props object and store them in their own variables to use in this component

//first create a const and in curly brackets write the name of the variable used in app.js >> make it equal to the name of the parameter that we input between parenthesis at the start of the function >> now to render the data we just have to write the name of the const inbetween curly brackets

//so this component was passed some data through props (the data is the string this is from props) 
//we recieved the data 
//then we destructured the data or pulled that data out of the props object
// and then we rendered it on the screen

//now we can pass multiple pieces of data as well by ... go to app.js file


// if we dont destructure we will get an issue that can be fixed by writing props.myData and props.message between the curly brackets 
// so its a good way to clean things up.

//2)PROP DRILLING - i will add props to my <Comp2 statement by assigning a variable name that can be anything equal to curly bracket + name of the prop we want in comp2
// now we go into our comp2 file 