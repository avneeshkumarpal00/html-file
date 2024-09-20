
import { useState } from 'react'
import './App.css'


function App() {
 let [counter, setCounter] = useState(15)
//let counter = 5  

const addValue = () => {
  console.log("value Added",counter);
  counter = counter + 1;
  setCounter(counter)
}
let removeValue = () =>{
  console.log("removed value", counter);
  counter = counter - 1;
  setCounter(counter)
}

  return (
    <>
     <h1>chai or react</h1>
     <h2>Counter value : {counter}</h2>
     <button onClick={addValue} > Add value {counter}</button>
     <br/>
     <button onClick={removeValue}> Remove value {counter}</button>
     <p>Footer {counter}</p>
    </>
  )
}

export default App
