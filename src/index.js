// Import the React and ReactDOM  libraries
import React from "react";
import ReactDOM from "react-dom/client";


const getTime = ()=>{
  return (new Date().toLocaleTimeString())
}


// Create a react component
const App = ()=>{
 
  return(<div>
    <div>Current Time:</div>
    <h3>{getTime()}</h3>
  </div>)
  
}


// Take the react component and show it on the screen
// ReactDOM.render(<App/>, document.querySelector("#root"))

// Anathor method 
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
    <>
    <App/>
    </>
  
);