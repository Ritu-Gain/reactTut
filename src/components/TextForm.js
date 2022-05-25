import React,{useState} from 'react'

export default function TextForm(props) {
        

        const handleOnChange=(event)=>{
                console.log("handle on click");
                setText(event.target.value);
        }
        const handleUpClick=()=>{
                console.log("Uppercase was Clicked"+ text);
                let newText=text.toUpperCase();
                setText(newText);
        }
        const handleLowClick=()=>{
                console.log("Lowercase was Clicked"+ text);
                let newText=text.toLowerCase();
                setText(newText);
        }


        const[text,setText]=useState("Enter the text");
     return (
    <>
    <div className="container">

    <h3>{props.heading}-</h3>
        <div className="mb-3 mx-5">
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick} >Convert to uppercase</button>
        <button className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to lowercase</button>   
    </div>
    <div className="container my-3">
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
    </div>
    </>
  )
}
