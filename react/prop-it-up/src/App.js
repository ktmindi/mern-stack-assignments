import logo from './logo.svg';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstName={'Brandy'} lastName={'Doe'} age={'15'} hairColor={'Black'}/>
      <PersonCard firstName={'Tony'} lastName={'Stephens'} age={'30'} hairColor={'Brown'}/>
      <PersonCard firstName={'Ducky'} lastName={'Mallard'} age={'56'} hairColor={'Gray'}/>
      <PersonCard firstName={'Ziva'} lastName={'King'} age={'35'} hairColor={'Red'}/>
    </div>
  );
}

export default App;
