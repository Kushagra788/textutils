
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
const [mode, setMode] = useState('light');
const [alert, setAlert] = useState(null);

const showAlert= (message,type)=>{
  setAlert({
    msg:message,
    type:type
  })
  setTimeout(()=>{
setAlert(null);
  },3000);
}

const toggleMode =()=>{
if(mode==='light'){
  setMode ('dark')
  document.body.style.backgroundColor='#042743';
  showAlert("Dark mode has been enabled","success");
  document.title='TextUtils-Dark Mode';
}
else{
  setMode ('light')
  document.body.style.backgroundColor='white';
  showAlert("Light mode has been enabled","success");
  document.title='TextUtils-Light Mode';
}
}

return (
<> 
<BrowserRouter>
<Navbar title="textutils2" mode={mode} toggleMode={toggleMode} />
<Alert alert={alert}/>
<div className="container my-3" mode={mode}>
<Routes>
<Route path="/about" element={<About/>}/>
</Routes>
<Routes>
<Route path="/" element={<TextForm showAlert={showAlert} heading= "Enter text to analye" mode={mode}/>}/>
</Routes>
</div>
</BrowserRouter>
</>
  );
}

export default App;
