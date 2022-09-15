import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//index.js is actually the first thing that runs. its sort of like our entry way file
//where you see alot of import files which is what we will do very often 


const root = ReactDOM.createRoot(document.getElementById('root')); //this document.getelement code finds an html element with root id
//where does this HTML come from? the index.html file in the public folder for our app -- if you open that file and scroll down a little bit you will see a div with an id="root"
//this is the actual html page thats going to be rendered in the browser
root.render(
  <React.StrictMode>
    <App />  
  </React.StrictMode>
);

//when we run this our index.js is grabbing the root of that particular div in our HTML and then were adding in our app
//so this is our first component <App /> 
//this is what it looks like to render a component
//strictmode thing you dont have to worry about it too much but its some extra kind of guardrails that helps react give us warnings if we've written something wrong so we dont have to touch that 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
