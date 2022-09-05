// Import the React and ReactDOM  libraries
import React from "react";
import ReactDOM from "react-dom/client";

// in past
// const React = require('react');

// getButtonText = ()=>{
//   return "Cick On me!";
// }
function getButtonText(){
  return "Click On me!";
}



// Create a react component
const App = ()=>{
  // const buttonText = "Click Me!"
  // const buttonText = ["Pakistan", "Zindabad"]
  const buttonText = {text: "Hi There!"}
  const style = {backgroundColor: "blue", color: "white"}
  const labelText = "Enter Your Name:";
  return (
    <div>
    <label className="label" htmlFor="name">{labelText}</label>
    <input id="name" type="text"/>
    <button style={style}>
  
    {/* {buttonText} */}
    {buttonText.text}
    {/* {getButtonText()} */}
    </button>
    </div>
  )
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