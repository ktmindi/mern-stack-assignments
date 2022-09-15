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

import Comp2 from './Comp2' //because i am already in the component folder we only need to write DOT SLASH and name of the file whereas when we were importing to the app.js file we had to write DOT SLASH/folder the file is in/file name 

const Component = () => {

    return(
        <div>
            <h1 className="my-class">Hello World</h1>
            <h2>more info</h2>
            <ul><li>1</li></ul>
            <Comp2 />
        </div>
    ) //JSX is transpiled into ES5 Javascript using Babel
}

export default Component;

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