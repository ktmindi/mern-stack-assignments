import './App.css';
import React, { useState } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import BonusDisplay from './components/BonusDisplay';
import BonusForm from './components/BonusForm';

function App() {
  // holding an array of strings for the colors input
  const [ boxColorArray, setBoxColorArray ] = useState([]);

  // Ninja Bonus: Add a second input that takes in an integer. 
  //    This integer will allow the user to specify the height and width of the generated box.
  //    Using an object to hold both the integer and the color together
  const [ bonusBoxArray, setBonusBoxArray ] = useState([])

  return (
    <div className="App">
      <h1>Standard Assignment</h1>
      <Form boxColorArray={ boxColorArray } setBoxColorArray={ setBoxColorArray } />
      <Display boxColorArray={ boxColorArray } />
      <hr />
      <h1>Ninja Assignment</h1>
      <BonusForm bonusBoxArray={ bonusBoxArray } setBonusBoxArray={ setBonusBoxArray } />
      <BonusDisplay bonusBoxArray={ bonusBoxArray } />

      
    </div>
  );
}

export default App;