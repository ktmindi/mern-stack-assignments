import logo from './logo.svg';
import './App.css';
import Header from './components/Header' //these are all our lego pieces that we will bring together >> from here we put the lego piece into our App function
import Person from './components/Person'

let people = [ {name:"Bob", height:5.8, gender:"male", money:100, age:24},{name:"Stacy", height:5.2, gender:"female", money:10, age:34},{name:"Jessica", height:5.11, gender:"female", money:200, age:22},{name:"Billy", height:4.8, gender:"male", money:20, age:44},{name:"Davey", height:6.8, gender:"male", money:50, age:29},{name:"Heather", height:5.8, gender:"female", money:10, age:22}]

//we would have had to destructured it twice to get to person.jsx const{name..}=props to pass it into just a single prop because it was an object inside of an object

// so out map function is going to iterate through people and for every one of these objects that it finds inside there is going to create a new person component and its going to pass in all of this to our person component file. which then will plug the information into our div
function App() {
  return (
    <div className="App">
      <Header />
      {people.map((item,index) => 
      <Person 
        key = {index}
        name = {item.name}
        height = {item.height}
        gender = {item.gender}
        money = {item.money}
        age = {item.age}
      />
      )}
    </div>
  );
}

export default App;


//1) delete <header to /header>
//2) now we need components so we will create a component folder and a component file - start with Header component