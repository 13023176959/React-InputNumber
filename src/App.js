import React,{ useState,useEffect } from 'react'
import logo from './logo.svg';
import './App.css';
import InputNumber from './react-controls/InputNumber'


function App(){
    const [value,setValue] = useState('aaa')
    return (
        <div>
          <InputNumber value={value} onChange={e=>{}}/>
          <InputNumber defaultValue={value} onChange={e=>{}}/>
        </div>
    )
}

export default App;
