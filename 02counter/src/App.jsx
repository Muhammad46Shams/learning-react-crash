import { useState } from "react"

function App() {

  const [counter , setCounter] = useState(15);


  const addValue = () => {
    setCounter((preAdd) => preAdd === 20 ? 20 : preAdd = preAdd + 1)
    setCounter((preAdd) => preAdd === 20 ? 20 : preAdd = preAdd + 1)
    setCounter((preAdd) => preAdd === 20 ? 20 : preAdd = preAdd + 1)
    setCounter((preAdd) => preAdd === 20 ? 20 : preAdd = preAdd + 1)
  }

  const removeValue = () => {
    setCounter((preRemove) => preRemove === 0 ? 0 : preRemove = preRemove - 1)
  }

  return (
    <>
      <h1>chai ar react</h1>
      <h2>Counter number is {counter}</h2>

      <button onClick={addValue} >Add number</button>
      <br />
      <button onClick={removeValue}>Remove number</button>
    </>
  )
}

export default App
