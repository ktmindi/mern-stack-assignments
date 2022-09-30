import {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [state,setState] = useState([])

  useEffect(()=>{
    fetch('https://pokeapi.co/api/v2')
    .then((result)=>{
      console.log(result)
      return result.json()
    }).then((res)=>{
      console.log(res)
      setState(res.data)
    }).catch((error)=>{
      console.log(error)
    })
  }, [])


  return (
    <div className="App">
      state.map((pokemon) => {
        <div>
          <h1>{pokemon.name}</h1>
        </div>
      })
    </div>
  );
}

export default App;
