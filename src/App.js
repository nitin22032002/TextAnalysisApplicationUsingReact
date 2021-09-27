import FormPage from './component/FormPage';
import Navbar from './component/Navbar';
import {useState} from 'react'
import Alert from './component/Alert'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import AboutUs from './component/AboutUs';
function App(props) {
  const [getMode,setMode]=useState("light")
  const [getAlert,setAlert]=useState(null)
  const showAlert=(message,type)=>{
    setAlert({message:message,type:type});
    setTimeout(() => {
        setAlert(null)
      }, 1500);
  }
  const toggleMode=()=>{
    if(getMode==="light"){
      setMode("dark")
      showAlert("Dark Mode Enable","success")
    }
    else{
      setMode("light")
      showAlert("Light Mode Enable","success")
    }
  }
  document.body.style.backgroundColor=(getMode==="dark"?"#222f3e":'white')
  document.body.style.color=(getMode==="dark"?"white":'black')
  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={toggleMode} colorMode={getMode} />
      <Alert alert={getAlert} />
        <Switch>
<Route exact path="/" >
      <FormPage mode={toggleMode} colorMode={getMode}  alert={showAlert}/>
</Route>
<Route exact path="/home" >
      <FormPage mode={toggleMode} colorMode={getMode}  alert={showAlert}/>
</Route>
<Route exact path="/about" >
      <AboutUs colorMode={getMode}/>
</Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
