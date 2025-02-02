// import logo from './logo.svg';
// import './App.css';

import { useState } from "react";
// import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
//   // Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000);
  }
  const toggleMode = () =>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.background = 'grey'
      showAlert("Dark mode enabaled", "success")
      document.title = 'Dark Mode';

    }
    else{
      setMode('light')
      document.body.style.background = 'white'
      showAlert("Light mode enabaled", "success")
      document.title = 'Light Mode';
    }
  }
  return (
    
    <>
    {/* <Router> */}
    <NavBar link="About" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter Story below" mode={mode} />
    </div>

    {/* <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter Story below" mode={mode} />} />
        </Routes>
        <TextForm showAlert={showAlert} heading="Enter Story below" mode={mode} />
    </div>

    </Router> */}
    
    </>
  );
}

export default App;
