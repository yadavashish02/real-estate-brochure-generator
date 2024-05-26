import React, {useState} from "react"
import Form from "./components/Form.jsx"
import Output from "./components/Output.jsx"

function App() {
  const [output, setOutput] = useState("")

  return (
    <>
    <Form setOutput={setOutput}/>
    <Output output={output}/>
    </>
  )
}

export default App
