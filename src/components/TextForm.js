import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleResetClick = () => {
        let newText = "";
        setText(newText);
    }

    const handleCopyText = () => {
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const RemoveExtraSpaces = () => {
        let newText = text.split(/[ ] +/);
        setText(newText.join(" "));
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

  return (
    <>
    <div className='container my-3'>
        <h1 style={{color : props.mode === 'light' ? 'black' : 'white'}}>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} style={{backgroundColor : props.mode === 'light' ? 'white' : 'black',color : props.mode === 'light' ? 'black' : 'white'}} 
                    onChange={handleOnChange} placeholder='Start typing or copy/paste' id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-warning mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-danger mx-2" onClick={handleResetClick}>Reset</button>
        <button className="btn btn-dark mx-2" onClick={handleCopyText}>Copy</button>
        <button className="btn btn-light mx-2" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-5">
        <h1 style={{color : props.mode === 'light' ? 'black' : 'white'}}>Your Text Summery is Here :</h1>

        <span className="badge text-bg-info mx-2">{text.length > 0 ? text.split(" ").length : 0} words</span>
        <span className="badge text-bg-success mx-2">{text.length} characters</span>
        <span className="badge text-bg-danger mx-2">{text.length > 0 ? 0.008 * text.split(" ").length : 0} Minutes read</span>
        
        <h2 className='my-5' style={{color : props.mode === 'light' ? 'black' : 'white'}}>Preview: </h2>
        <div className="alert alert-info" role="alert">
            {text.length > 0 ? text : 'Enter text above to see the preview here..'}
        </div>
    </div>
    </>
  )
}
