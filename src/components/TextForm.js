import React, { useState } from "react";
export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked", text); //only for console debuging
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    console.log("Lowercase was clicked", text); //only for console debuging
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change"); //only for console debuging
    setText(event.target.value);
  };
//   Exercise Started:
// Clear Text
   const handleClear = () =>{
    setText('');
    console.log("Text Cleared");
   }
// Copy Text:
  const handleCopy = () =>{
    console.log("I am Copy");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
// Handle Extra Spaces:
  const handleExtraSpaces = () =>{
    let newText = text.split(/[  ]+/);
    setText(newText.join(" "))
    console.log("Extra Spaces Removed")
  }
//   const [text, setText] = useState("Enter text here");
  const [text, setText] = useState("");
  // text = "new text";  --> Wrong Way
  // setText("new text");  --> Correct way to change the state
  return (
    <>
      <div className="container">
        <h1>{props.heading} </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>Conver to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>Conver to Lowercase</button>
        <button className="btn btn-primary mx-1" onClick={handleClear}>Clear Text</button>
        <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      </div>
      <div className="container my-3">
        <h1>Your text summery</h1>
        <p> {text.split(" ").length} words and {text.length} characers</p>
        <p>{0.008 * text.split(" ").length } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
