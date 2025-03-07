import React, {useState} from 'react'



export default function TextForm(props) {

  const handleUpClick = (e)=>{
    e.preventDefault();
    //console.log("Uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    //props.showAlert("Converted to Uppercase!","success");
  }

  const handleLoClick = (e)=>{
    e.preventDefault();
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    //props.showAlert("Converted to Uppercase!","success");
  }

  const handleClearClick = (e)=>{
    e.preventDefault();
    //console.log("Uppercase was clicked" + text);
    let newText = "";
    setText(newText);
    //props.showAlert("Converted to Uppercase!","success");
  }

  const handleOnChange = (event)=>{
      console.log("On change");
      setText(event.target.value);
      //props.showAlert("Converted to Uppercase!","success");
    }

    const handleCopy = (e)=>{
      e.preventDefault();
      //console.log("Uppercase was clicked" + text);
      var text = document.getElementById("mybox");
      text.select();
      text.setSelectionRange(0, 999);
      navigator.clipboard.writeText(text.value);
      //props.showAlert("Converted to Uppercase!","success");
    }
  

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3">
            <textarea className="form-control" style={{backgroundColor:props.mode==='dark'?'grey':'white'}} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Chat</button>
          <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Chat</button>
        </form>
        
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
    
  )
}
