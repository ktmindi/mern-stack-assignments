import logo from './logo.svg';
import './App.css';
import Component from './components/Component'; //3) we dont need to put .js at the end because react just knows that it is a js file.
//4) now to render that component we will put <Component /> into the div below

function App() {
  return (
    <div className="App">
      <Component />
      <Component />
      <Component />
    </div>
  );
}
//1) everytime we create an app we are going to want to clear this out starting from <header classname... to </header>
//2) this file is where we will import and render all our components
export default App;


//5) if we look in the browser now you will see the html we put in the component file


//6) when writing our html it will always need to be inbetween one of the following:     <div></div>  OR <> </>
// if we look at the difference on the inspector tool: when our html in our component.js file is inside a div, each time the component is replicated we wll see a new div for each component 
// if we use the <> fragment in our component.js file each time our component is replicated in this app.js file they will all go under the same div - right into the dom
// choosing which one to use depends on how we want our CSS to look - sometimes having the component inside <div> rather than fragment <> will mess up our CSS