// check out the video for algo that was done through leetcode.com IMPORTANT

// review from last lecture
// index.js is the entry point file - the file under the hood that runs first
// app.js is our root component - first thing that is going to render

// ** there is part of the platform that mentions creating an HTML FILE -- you dont have to do that -- thats if your not using npx create react app >> technically you can build a react app without using the npx create command but the command gives us all of the files that make it easy for us.

// these components let us divide our page into pieces like divs with functionality
// we can have components inside components, we can have components inside our app, etc.
// good to think about what we are building as a tree. 
//if at the top we have our app. and we got a component and component two is rendered inside that component its like a chain of events 
// the top being the parent. the component is a child of the app and component two is like a child of component one
//image> three squares one above the other > the top one is app.js > middle is component > bottom is comp2

// state magement is a really big deal in REACT because it is a single page application
// state management : state is another word for data essentially or whatever kind of data we have stored in our memory for out app. 

//so how do we store that data and how do we pass that through our application 
// we are going to go through a basic way today called PROPS

//because our single page application is made up of numerous components we need to remember that each component is essentially self-encapsulated so whenever we duplicate a component on our page we have to pass whatever data that component needs through to each of the components that appears on the page. [for example.. we have a component that renders a name.. and we want that component to appear/render 6 times throughout the page.. that means we have to pass the same data through 6 times]

// we have to pass this data DOWNWARD so we will use PROPS to pass data through
//**screenshot 
//im going to create a piece of data that will is going to be up at the top (in the app.js) and i want to be able to pass it through so that i can use it in the html fragment in all of the other components as well

//start in app.js in react-intro app folder


//inline styling css go to comp2 file

//now lets say we want our props to not only appear in component 1 but comp2 as well 
//what do we do? PROP DRILLING  >> go to component file to see this in action
// we essentially have to pass down props the same way down each level  >> put the props in the child to handle the grandchild
// we will learn ways we can avoid this 