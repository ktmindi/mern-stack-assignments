import { useState } from 'react'

const Person = props => {
    const{name, height, gender, money, age, index, people, setPeople} = props
    const [likes, setLikes] = useState(0)
    const [cardBackground, setCardBackground] = useState('')

    //we dont have access to index so we need to add it to our props
    //we dont mutate our data..we make copies and change the state of the copy
    //const newPeople = [...people] is a new copy of my array 

    const updateMoney = (index, isMore) => {
        const newPeople = [...people]
        if(isMore) {
            newPeople[index].money++
        }else{
            newPeople[index].money--
        }
        setPeople(newPeople)
    }

    const deletePerson = personNum => {
        setPeople(people.filter((person, index) => personNum !== index))
        //const newPeople = [...people]
        //setPeople(newPeople.filter((person, index) => personNum != index))
    } //we dont have to write newPeople because filter(CREATES A NEW ARRAY) creates a copy and will set it to setPeople

    const likeMe = () => {
        setLikes(likes + 1)
    }

    const changeColor = () => {
        setCardBackground('#ff9900')
        console.log('Hi Guys', cardBackground)
    }

    const clearColor = () => {
        setCardBackground('')
        console.log('Hi Guys', cardBackground)
    }

    return(
        <div style = {{backgroundColor : cardBackground}}
        onMouseOver={changeColor}
        onMouseOut={clearColor}
        >
            <h2>{name}</h2>
            <p>HEIGHT: {height}</p>
            <p>GENDER: {gender}</p>
            <p>MONEY: {money}</p>
            <p>AGE: {age}</p>
            <p>LIKES: {likes}</p>
            <button onClick={likeMe}>I like {name}</button>
            <button className='moMoney' onClick={e=>updateMoney(index, true)}>Give Money</button>
            <button className='noMoney' onClick={e=>updateMoney(index, false)}>Take Money</button>
            <button className='bye' onClick={e=>deletePerson(index)}>Delete</button>
        </div>
    )
}

export default Person

//we have to know the index to know what to delete -- we can splice things, we can use ...people with indicies or use maps 