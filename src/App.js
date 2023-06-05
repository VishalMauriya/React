import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode Enabled!');
    }else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode Enabled!');
    }
  }

  const showAlert = (message) => {
    setAlert(message);

    setTimeout(() =>{
      setAlert(null);
    },1500)
  }

  return (
    <>
    <Router>
    <Navbar title='TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <Routes>
      <Route exact path='/' element={<TextForm heading='Enter the Text to Analyze : ' mode={mode}/>} />
      <Route exact path='/about' element={<About mode={mode}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
