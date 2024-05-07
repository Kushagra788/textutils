import React,{useState} from 'react'

export default function TextForm(props) {

  const handleUPclick = ()=>{
   // console.log("uppercase was clicked"+text); //tp print etxt in console
   let newText=text.toUpperCase();
   setText(newText)
   // setText("2nd time") //to change text value on 2nd click
   props.showAlert("Converted to upper case","Success");
  }
const handleLoclick = ()=>{
    // console.log("lowercase was clicked"+text); //tp print etxt in console
    let newText=text.toLowerCase();
    setText(newText)
    props.showAlert("Converted to lower case","Success");
}
const handleClearClick = ()=>{
      let newText='';
      setText(newText)
      props.showAlert("Text Cleared","Success");
}
  const handleOnChange = (event)=>{
    // console.log("onChange"); // to print text in console
    setText(event.target.value)
}

const [text, setText] = useState('Enter Text Here');

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#3363e8':'white', color: props.mode==='dark'?'white':'black'}}  id="myBox" rows="12"></textarea>
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUPclick}>Convert to UpperCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>Convert to LowerCase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
</div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text summary :</h1>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charcaters</p>
      <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes required to read above words</p>

      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter something in textbox to preview it here"}</p>
    </div>
    </>
  )
}