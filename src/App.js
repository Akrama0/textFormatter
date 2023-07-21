// import logo from './logo.svg';//
// import './App.css';//
import Header from './component/Header';
import Main from './component/Main';
import Alert from './component/Alert';
import { useState } from 'react';





function App() {
  
  const [alert, setAlert]= useState(null);
  const showAlert = (massageAlert, type) =>{
    setAlert({
      msg : massageAlert,
      type: type
    }) 
    setTimeout(()=>{
      setAlert(null);
    },1500)
    
  }
  const[mode, setMode] = useState("primary");
  const [bgColor, setbgColor] = useState("lab(82 2.81 1.25)")

  const colorMode =()=>{
    changeColor();
    if(mode === "primary"){
      setMode("dark");
      showAlert(" Darkmode enable!",`"Successfully"`);
      setbgColor("#031022");
    }else{
      setMode("primary");
      showAlert(" Lightmode enable!",`"Successfully"`);
      setbgColor("lab(82 2.81 1.25)");
    }
  }

  const [textMode, setTextMode] = useState("black");
  const changeColor =()=>{
    if(textMode === "black"){
      setTextMode("#fff");
    }else{
      setTextMode("black");
    }
  }
  document.body.style.backgroundColor= bgColor
  return (
    <>
    <Header heading= "Textformatter" colorMode={colorMode} mode={mode}/>
    <Alert alert={alert}/>
    <Main  showAlert={showAlert} textColor={textMode}/>
  </>
  );
}

export default App;
