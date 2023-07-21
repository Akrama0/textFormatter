import React from 'react'
import './styles/Main.css'
import { useState } from 'react'


function Main(props) {
   const [massage, setMassage] = useState("");

  //  style Object to convert white to black //
  
   let style={
    color: props.textColor
   }

    function handleChange(event){
      setMassage(event.target.value);
    }
    // To Convert toUpperCase//
    function toUpperCase(){
        let newMassage = massage.toUpperCase();
        setMassage(newMassage);
        
        props.showAlert(" Converted to Uppercase!",`"Successfully" :`);
    }
    // To Convert LowerCase//

    function toLowerCase(){
        let newMassage = massage.toLowerCase();
        setMassage(newMassage);
        props.showAlert(" Converted to Lowercase!",`"Successfully" :`);

    }
    // Copy Text//

    const [change, setChange] = useState("Copy text");
    function textCopy(){
        navigator.clipboard.writeText(massage);
        if(massage ===""){
          setChange("Copy text");
        }else{
          setChange("text Copied");
          props.showAlert(" Text Copied to clipboard!",`"Successfully" :`);

        }
        
    }
    // Clear text//

    function clearText(){
      setMassage("");
      props.showAlert(" Text Cleared!",`"Successfully" :`);

    }

    // To removeSpace//

    function removeSpace(){
    let newMassage = massage.split(/[ ]+/);
    setMassage(newMassage.join(" "));
    props.showAlert(" Remove all Extra Spaces !",`"Successfully" :`);

  }
  return (
    <div className='container'>
    <h1 style={style}>Enter Your Text below to analyse..</h1>
        <textarea className="text" value={massage} onChange={handleChange}  id='text' placeholder='Enter your text...'/>

    <div className='wrap-btn'>
    <button disabled={massage.length===0} type="button" onClick={toUpperCase}>Convert to UpperCase</button>
    <button disabled={massage.length===0} type="button" onClick={toLowerCase}>Convert to LowerCase</button>
    <button disabled={massage.length===0} type="button" onClick={textCopy}>{change}</button>
    <button disabled={massage.length===0} type="button" onClick={clearText}>Clear text</button>
    <button disabled={massage.length===0} type="button" onClick={removeSpace}>Extra Remove Space</button>
    </div>
    
    <h2 style={style}>Your Text Summary</h2>
    <div>
    <h3 style={style}>{massage.split(" ").filter((elements)=>elements.length!==0).length} Words</h3>
    <h3>{massage.length} Characters</h3>
    </div> 
    <div>
    <h3 style={style}>{massage.split(" ").filter((elements)=>elements.length!==0).length * .003} min Average time to Read</h3>
    </div>
    <h2 style={style}> 
      Preview
    </h2>
    <p style={style}>{massage===""?'Nothing to have preview...':massage}</p>
    </div>
  )
}

export default Main