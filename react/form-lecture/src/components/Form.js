import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
//whatever we pass into the useState between the quotes is the starting data >> this can be any sort of data -- numbers, boolean, and more complex data structures like objects, array of items, array of objects -- 

    const submitHandler = () => {

    }


    return (
        <div>
            <form className="form col-4 mx-auto" onSubmit={submitHandler}>
                <label className="form-label">First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control" />
                <label className="form-label">Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} className="form-control" />
                <label className="form-label">Age:</label>
                <input type="text" onChange={(e) => setAge(e.target.value)} className="form-control" />
                <label className="form-label">City:</label>
                <input type="text" onChange={(e) => setCity(e.target.value)} className="form-control" />
                <button className="btn btn-primary mt-3">SUBMIT</button>
            </form>
        </div>
    )
}
export default Form


//writing both import lines out is the same as what we wrote above
//import React from 'react'
//import {useState} from 'react'

//state allows us to have data that can change over time. state allows us to have persistant data that changes over time. in a different way from just regular data. whenever state changes the component that stores it will re-render on the screen

//when it comes to forms what we actually want to do is track each of the input fields -- each of these input fields were going to want to store as a piece of state >> theres different ways we can do this so we will go over one way and later on we will look at how to simplify it.

//2) onChange{()} -- going to write a function in the curly brackets -- this is considerd an anonymous function -- its only run and created here where we run it

//can also create a function outside and pass it in but ^^ is easier 

// so here everytime it changes i want to use my setter function to set first name to something.

//the event object which we kind of went over yesterday noted as e (line 43 sept7 lecture )

//e.target.value is how were always going to be able to access what we have actually typed into the field. the actual data. 
// to check if the function works. open inspect tool on google chrome - go to the compoents tab and you will see that we have 4 hooks set up that are empty to start with. as you type into your form, your state should be updating and 1 state under hooks should change live time as you type IMAGE NAMED HOOK check -- good debugging tool

//lastly we need a submit button 