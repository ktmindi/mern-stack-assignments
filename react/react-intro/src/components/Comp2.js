//es7+ react/redux extension is really cool because when we go to make a new component 
//type in  rafce and hit TAB it will build the component for me 

import React from 'react' //as of version 18 if we are using version 18 we dont have to add this line of code

const Comp2 = (props) => {

    const{myDataCanBeAnyNameHere,message} = props

    const myStyles = {
        border:'2px solid black',
        backgroundColor:'blue',
        padding:'10px'
    }
    return (
    <div style={{border:'2px solid black',backgroundColor:'blue'}}>
        <h1>Component 2</h1>
        <h2>pass through from App.js: {myDataCanBeAnyNameHere}</h2>
        <h2>pass through from App.js: {message}</h2>
        <button>Click here</button>
    </div>
    )
}

export default Comp2



// so we can choose where we will render this component and in this example we will render it into our component.js file


//there is more than one way we can input css styling one is we do what we did in component.js where we give the classname and edit the app.css file
//another way is called inline styling where instead of using className we write style= two curly brackets, then the key/css property on the left and the value has to be in quotes and then you would use a comma to add other css properties or values

//ANOTHER JSX DIFFERENCE IS WHEN WE ARE WRITING THE PROPERTY NAMES ON THE LEFT, WE MUST CAMEL CASE THE PROPERTY NAME

//another useful way to input css styling is if you have a bunch of styles and you just want to put them in here quickly you can create an object and put a bunch of properties inside the object and then you can write <div style={myStyles}>



//2) now we have to recieve the prop data into this component
//to set it up we have to first add props as a parameter to our function 
//then destructure like before 
//and pass into our return to render it