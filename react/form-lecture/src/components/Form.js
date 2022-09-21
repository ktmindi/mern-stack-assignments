import React, {useState} from 'react'

const Form = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [age, setAge] = useState('')
    const [city, setCity] = useState('')
//whatever we pass into the useState between the quotes is the starting data >> this can be any sort of data -- numbers, boolean, and more complex data structures like objects, array of items, array of objects -- 
// we have setSate set up as we type into each field that particulate state gets updated with whatever user input. when user fills out all data we will need a submit handler to tell us where it will go
    const obj = {
        firstName,
        lastName,
        age,
        city
    }
    const submitHandler = (e) => {
        e.preventDefault()
        if(firstName && lastName && age && city){
            if(firstName.length > 3) {
                console.log(obj)
            } else{
                console.log('bad data first name not long enough')
                setFirstName('')
                setLastName('')
                setAge('')
                setCity('')
            }
        } else {
            console.log('bad data do not pass go')
            setFirstName('')
            setLastName('')
            setAge('')
            setCity('')
        }
    }
//this submit function is actually going to send our data somewhere -- a database -- or another part of our app.. etc.

//IMPORTANT!!!! everytime we submit a form in react we need to first pass in the event object as e into the function. then write e.preventDefault() this line of code says submit the form BUT prevent us from refreshing the page. cuz i want to manually clear my state when i choose.

// form col-4 mx-auto it centers everything by making the space even on both sides
    return (
        <div>
            <form className="form col-4 mx-auto" onSubmit={submitHandler}>
                <label className="form-label">First Name:</label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)} value={firstName} className="form-control" />
                {
                    firstName && firstName.length < 3 ? <p className="text-danger">First name must be at least 3 characters</p> : null
                }
                <label className="form-label">Last Name:</label>
                <input type="text" onChange={(e) => setLastName(e.target.value)} value={lastName} className="form-control" />
                <label className="form-label">Age:</label>
                <input type="text" onChange={(e) => setAge(e.target.value)} value={age} className="form-control" />
                <label className="form-label">City:</label>
                <input type="text" onChange={(e) => setCity(e.target.value)} value={city} className="form-control" />
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


// now validations  - this is just a messag for the user but we can still submit the form.. i have nothing that is stopping the data from going to my database.
//                <input type="text" onChange={(e) => setFirstName(e.target.value)} className="form-control" />
//{
//    firstName.length < 3 ? <p>First name must be at least 3 characters: null </p>
//}


//firstName && firstName.length < 3 ?
//this addition of the firstName at the beginning part means that if theres nothing in the field at all makes the statement more logical. 