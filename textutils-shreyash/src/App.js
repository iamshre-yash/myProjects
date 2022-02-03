import React, {useState} from 'react'
import Navbar from './components/Navbar.js'
import TextForm from './components/TextForm.js'
import Alerts from './components/Alert.js'

function App() {
    const [alert, setAlert] = useState(null);
    const showAlert = (message,type) =>{
        setAlert({
            msg: message,
            type: type,
        })
        setTimeout(()=>{
            setAlert(null)
        }, 1500);
    }
    return (
        <>
        <Navbar/>
        <Alerts alert={alert}/>
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below:"/>
        </>
    );
}


export default App;
