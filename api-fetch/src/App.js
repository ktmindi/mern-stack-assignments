import {useState,useEffect} from 'react'
import axios from 'axios'

import './App.css';

function App() {
  //json javascript object notation

  const [state, setState] = useState([])

//CRUD operations 
//create read update delete
// ====
//HTTP verbs
//post, get, put, delete
//we are doing a get request here


  useEffect(()=>{
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
      console.log(res)
      setState(res.data.data)
    }).catch((error)=>{
      console.log(error)
    })
    },[])
//add in [] this is called a dependency array and by adding this in we are telling the useEffect to only run the first time the component loads not when it updates 
//we can technically add dependencies in here
// we will always want to add this dependency arrary in
//out base 
//we have successfully pulled data from an API and put it into state 


  return (
    <div className="App">
      {
        state.map((person) => (
          <div>
            <h1>{person.first_name} {person.last_name}</h1>
            <h2>{person.email}</h2>
            <img src={person.avatar} />
          </div>
        ))
      }
    </div>
  );
}

export default App;
