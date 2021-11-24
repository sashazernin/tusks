import './App.css';
import React, { useState } from 'react';
function App() {
  const [count,changecount] = useState(0);
  const [countstatus,changecountstatus] = useState('Ноль');
  const [color,changecolor] = useState('while')
  let minus = () => { 
    if(count != 0){
      changecount(count-1)
      statuschange(count-1)
    }
  }
  let plus = () => {
    changecount(count+1)
    statuschange(count+1)
  }
  let reset = () => {
    changecount(0)
    statuschange(0)
  }
  let statuschange = (num) => {
    if(num==0){
      changecountstatus('Ноль')
      changecolor('white')
    }
    else{
      if(num%2==0){
        changecountstatus('Четное')
        changecolor('greenyellow')
      }
      else{
        changecountstatus('Не четное')
        changecolor('lightcoral')
      }
    }
  }
  return(
    <div className = "body">
      <div className = "content">
        <div className = "count">
          <label>{count}</label>
        </div>
        <div className="count_status" style={{background:color}}>
          {countstatus}
        </div>
        <div className="buttons">
          <button className = "button" onClick={minus}>-</button>
          <button className = "button_reset" onClick={reset}>Reset</button>
          <button className = "button" onClick={plus}>+</button>
        </div>
      </div>
    </div>
  )
}
export default App;