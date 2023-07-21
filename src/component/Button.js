import React from 'react'
import './styles/Button.css'
function Button(props) {
    function toUpperCase(props){
        console.log(props.value)
    }
  return (
    <>
    <button type="button" onClick={toUpperCase}>Convert to Uppercase</button>
    <button type="button">Convert to Lowercase</button>
    <button type="button">Copy text</button>
    <button type="button">Extra remove space</button>
    </>
    
  )
};

export default Button