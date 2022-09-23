import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import Entry from './components/Entry'
import {useState} from 'react'



function App() {

  const [entries, setEntries] = useState([])
  const [editIndex, setEditIndex] = useState('')
  return (
    <div className="App">
      <Header />
      <Form 
      setEntries = {setEntries}
      entries = {entries}
      editIndex = {editIndex}
      />
      {entries.map((entry, index) => {
        return <Entry 
        key ={index} 
        index = {index}
        entry = {entry}
        entries = {entries}
        setEntries = {setEntries}/>
        setEditIndex = {setEditIndex}
      })}
    </div>
  );
}

export default App