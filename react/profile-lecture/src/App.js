import './App.css';
import Header from "./components/Header"
import Person from "./components/Person"
import AddPerson from "./components/AddPerson"
import {useState} from "react"


function App() {
  const [people, setPeople] = useState([])
  return (
    <div className="App">
      <Header />
      <AddPerson people={people} setPeople={setPeople}/>
      {people.map((item,index) =>
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
        )}
    </div>
  );
}

export default App;

//keep in mind that key = index is not being passed to us.. its just being used by react so we have to create index = index
