import React, {useState} from "react"
import Form from "./components/Form.jsx"
import Output from "./components/Output.jsx"
import {insertApi} from "./api/insertApi.js"
import { TONE_OPTIONS, LENGTH_OPTIONS } from './constants/Options.js'

const toneDefault = Object.values(TONE_OPTIONS)[0]
const lengthDefault = Object.values(LENGTH_OPTIONS)[0]

function App() {
  const [output, setOutput] = useState("")
  const [formData, setFormData] = useState({
      tone: toneDefault,
      lengthOfCopy: lengthDefault,
      featuresOfBuilding: "",
      brandPositioning: ""
  })

  const handleInsert = async () => {
    try {
      if (!output) {
        alert("Output must be non empty")
        return
      }
      console.log(formData)
      await insertApi({...formData, generatedCopy: output})
    } catch(error) {
      console.error(error)
      alert("Something bad happened")
    }
  }

  return (
    <>
    <Form
    setOutput={setOutput}
    formData={formData}
    setFormData={setFormData}
    TONE_OPTIONS={TONE_OPTIONS}
    LENGTH_OPTIONS={LENGTH_OPTIONS}
    />
    <Output output={output} setOutput={setOutput}/>
    <button onClick={handleInsert}>Insert in DB</button>
    </>
  )
}

export default App
