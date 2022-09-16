import { useState } from 'react'


const PersonCard = (props) =>{
    
    const {firstName,lastName,age,hairColor} = props
    const [ages,setAges] = useState(age)

    const increaseAge = () => {
        setAges(ages + 1)
    }

    return(
        <div className="my-class">
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {ages}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={increaseAge}>Birthday Button for {firstName} {lastName}</button>
        </div>
    )
}

export default PersonCard;