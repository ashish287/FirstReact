//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

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

  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-warning');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-success');
  }

  const toggleMode = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls);
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
      <Router>
        <Navbar title="Ashish" aboutText="About Us" mode={mode} toggleMode = {toggleMode}/>
        <Alert alert={alert}/>
        <div className="container my-3">
        {/* <TextForm heading="Enter the text to analyze" mode={mode}/>
        <About mode={mode}/> */}
          <Routes>
          
            <Route path="/" heading="Enter the text to analyze"  mode={mode} element={<TextForm />} />
            <Route path="/about" element={<About mode={mode}/>} />         
            
          </Routes>
          
          
        </div>
      </Router>
      
    </>
      
  );
}

export default App;
