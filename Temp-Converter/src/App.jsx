import {useState} from "react";
import './App.css'

function App() {
  const [c, setC] = useState(0)
  const [f, setF] = useState(0)
  const [k, setK] = useState(0)
  
  const updateC = (e) => {
    setC(e.target.value)
    setF(e.target.value * 9/5 + 32)
    setK(e.target.value * 1 + 273.15)
  }
  const updateF = (e) => {
    setC((e.target.value - 32) * 5/9)
    setF(e.target.value)
    setK((e.target.value - 32) * 5/9 + 273.15)
  }
  const updateK = (e) => {
    setC(e.target.value - 273.15)
    setF((e.target.value - 273.15) * 9/5 + 32)
    setK(e.target.value)
  }
  
  return (
    <>
      <h1 id="title">Temperature Converter</h1>
      <div className="temps">
        <label>Celsius<input type="number" id="c" value={c} onChange={updateC}/></label>
        <span>=</span>
        <label>Fahrenheit<input type="number" id="f" value={f} onChange={updateF}/></label>
        <span>=</span>
        <label>Kelvin<input type="number" id="k" value={k} onChange={updateK}/></label>
      </div>
    </>)
}

export default App