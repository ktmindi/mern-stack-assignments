import Header from "./components/Header"
import Person from "./components/Person"
import AddPerson from "./components/AddPerson"
import './App.css'
import { useState } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const[people, setPeople] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/add" element={<AddPerson people={people} setPeople={setPeople}/>} />
        <Route path="/profiles" element= {people.map((item, index) =>
          <Person 
            key = {index}
            index = {index}
            name = {item.name}
            height = {item.height}
            gender = {item.gender}
            money = {item.money}
            age = {item.age}
            people = {people}
            setPeople = {setPeople}
          />
        )} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App

//keep in mind that key = index is not being passed to us.. its just being used by react so we have to create index = index

