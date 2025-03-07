//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
//import About from './components/About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');  // whether darkmode is enabled or not

  const [alert, setAlert] = useState(null);

  const showAlert =(message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
  }

  const toggleMode = ()=>{
    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");  
      document.title = 'Ashish - Dark Mode';
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled","success");  
      document.title = 'Ashish - Light Mode';
    }
  }
  return (
    <>
      {/* <Router> */}
        <Navbar title="Ashish" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">

          <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode} />
          {/* <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" heading="Enter the text to analyze"  mode={mode} element={<TextForm />} />
            
            
          </Routes> */}
          
          
        </div>
      {/* </Router> */}
      
    </>
      
  );
}

export default App;
