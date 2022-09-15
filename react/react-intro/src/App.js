import logo from './logo.svg';
import './App.css';
import Component from './components/Component'; //3) we dont need to put .js at the end because react just knows that it is a js file.
//4) now to render that component we will put <Component /> into the div below

//function App() {
//  return (
//    <div className="App">
//      <Component />
//      <Component />
//      <Component />
//    </div>
//  );
//}
//1) everytime we create an app we are going to want to clear this out starting from <header classname... to </header>
//2) this file is where we will import and render all our components
//export default App;


//5) if we look in the browser now you will see the html we put in the component file


//6) when writing our html it will always need to be inbetween one of the following:     <div></div>  OR <> </>
// if we look at the difference on the inspector tool: when our html in our component.js file is inside a div, each time the component is replicated we wll see a new div for each component 
// if we use the <> fragment in our component.js file each time our component is replicated in this app.js file they will all go under the same div - right into the dom
// choosing which one to use depends on how we want our CSS to look - sometimes having the component inside <div> rather than fragment <> will mess up our CSS


//LECTURE 9-1

function App() {

  const myArr = [23,4,12,7,3,22]

  return (
    <div className="App">
      <Component myData={'this is from props'} message={'Another from props'}/>
    </div>
  );
}

export default App;

//1) in our div we have our child component so we will start by passing data through this component 
// we do this by creating an attribute inside the tag <Component /> that is essentially a variable with a name which we can call whatever we want  
// this is how we pass a piece of data into a component 

//PROPS[SHORT FOR PROPERTIES] IS WHAT WE USE TO PASS THAT DATA INTO THE COMPONENT 
//props is a way to pass data from one component to another thats below it -- but its not always going to be from the app.js file 
//PROPS is actually just an empty object (almost like a vehicle -- we can put stuff into it and then it carries all that data to our component) And in our component we have to do something to pull that data out

// now in order for the component to now recieve that data and present it on the screen we are going to go into the component that we just passed the data into 

//technically ive created a variable called mydata which holds this string once i do that in this component its technically added into this props object so now my props object has a key value pair
//{myData:'this is from props'}
// myData is the key (the name of the variable) and :this is from props is the value
//so it gets added into this object and this object gets moved and i can use it so i have to find a way to recieve it 
//go to component.js file in react-intro


//2) we can add as many key value pairs as we want [do not include a comma inbetween or you will get an error]
//so now our props object looks like this
//myData:'this is from props'
//message:'another from props'
//knowing this we can destructure both of them out of props now in the component.js file

//3) with props we can pretty much pass in anything between the curly brackets we could create an array
//and instead of this is from props write myArr between the curly brackets 
//we can pass complex data types, objects, arrays, etc