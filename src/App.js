import './App.css';
import React,{useState} from 'react';
import InputForm from './Components/InputForm';
import Display from './Components/Display';

function App() {

  const [data,setData] = useState([{state:"Maharashtra",division:"Nashik",district:"Ahmednagar",taluka:"Sangamner",village:"Warvandi"}]);

  const addDataHandler = (newData) =>{
    setData((prevState)=>{
      return [...prevState,newData];
    });
  }

  return(
    <div className="app">
      <InputForm addData = {addDataHandler}></InputForm>
      <Display userData = {data}></Display>
    </div>
  );
}

export default App;
