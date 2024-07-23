import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUCclick = () =>{
        let newTxt = text.toUpperCase();
        props.showAlert("Converted to Upeer Case", "success")

        setText(newTxt);
    }
    const handleLCclick = () =>{
        let newTxt = text.toLowerCase();
        props.showAlert("Converted to Lower Case", "success")
        setText(newTxt);
    }
    const handleClearclick = () =>{
        let newTxt = '';
        props.showAlert("Clear field", "success")
        setText(newTxt);
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const [text, setText] = useState(''); 
  return (
    <>
    <div className='container'>
<div className="mb-3">
  <h1 style={{color : props.mode === 'light'  ? 'black': 'white'}} >{props.heading}</h1>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8" style={{backgroundColor : props.mode === 'light'  ? 'grey': 'white', color : props.mode === 'light'  ? 'white': 'black'}}> </textarea>
  <button style={{color : props.mode === 'light'  ? 'black': 'white'}} className="btn btn-primary my-3" onClick={handleUCclick}>CONVERT TO UP CASE</button>
  <button style={{color : props.mode === 'light'  ? 'black': 'white'}} className="btn btn-primary my-3 mx-2" onClick={handleLCclick}>convert to lower case</button>
  <button style={{color : props.mode === 'light'  ? 'black': 'white'}} className="btn btn-primary my-3 mx-2" onClick={handleClearclick}>Clear</button>

</div>
    </div>
    <div className="container">
        <h1 style={{color : props.mode === 'light'  ? 'black': 'white'}}>Your Text Summary</h1>
        <p style={{color : props.mode === 'light'  ? 'black': 'white'}}>{text.split(" ").length } words and {text.length} characters</p>
        <p style={{color : props.mode === 'light'  ? 'black': 'white'}}>{0.008 * text.split(" ").length} Minutes to read this </p>
        <h2 style={{color : props.mode === 'light'  ? 'black': 'white'}}>Preview</h2>
        <p style={{color : props.mode === 'light'  ? 'black': 'white'}}>{text.length>0 ? text : "Enter text in the above text area for preview"}</p>
    </div>
    </>
  )
}
