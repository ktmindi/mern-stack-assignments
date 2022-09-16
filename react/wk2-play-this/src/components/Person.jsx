import { useState } from 'react'
//here we will use the way the platform shares


const Person = props => {
    
    const {name, height, gender, money, age} = props
    const [likes, setlikes] = useState(0) //whenever you use useState it returns an array so all we are doing is destructuring the arrary likes and setLikes
    const [cardBackground, setCardBackground] = useState('')
    //const thingX = useState('Pie')
    //console.log('Looks at me', thingX)
    
    //for this function the purpose is to increment the number of likes 
    //we shouldnt use likes++ we dont want to mutate state we only want to do it with our getter and so thats why we have this setter otherwise what we would do inside of a regular vanilla js file is just likes++ 
    //were trying to stick with those functional programming concepts 
    const likeMe = () => {
        setlikes(likes + 1)
    }

    const changeColor = () => {
        setCardBackground('lightblue')
        console.log('hi guys', cardBackground)
    }

    const clearColor = () => {
        setCardBackground('')
        console.log('hi guys', cardBackground)
    }

    return(
        <div style={{backgroundColor: cardBackground}}
        onMouseOver={changeColor}
        onMouseOut={clearColor}
        >
            <h2>{name}</h2>
            <p>Height: {height}</p>
            <p>Gender: {gender}</p>
            <p>Money: {money}</p>
            <p>Age: {age}</p>
            <p>Likes: {likes}</p>
            <button onClick={likeMe}>I like {name}</button>
        </div>
    )
}

export default Person

//our button is supposed to increase the number of likes so first .. do we start with a number of likes? 

//now we want to create an event so that when we hoover over one of them, it highlights a color 
//we want to do this using the person.jsx file and not go into our css file 