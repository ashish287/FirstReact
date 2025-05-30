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
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      //props.showAlert("Converted to Uppercase!","success");
    }
  

  const [text, setText] = useState('');
  return (
    <>
      <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <form>
          <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} 
            style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}}  id="mybox" rows="8"></textarea>
          </div>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Chat</button>
          <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Chat</button>
        </form>
        
      </div>
      <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summery</h1>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:"Enter something to preview"}</p>
      </div>
    </>
    
  )
}
