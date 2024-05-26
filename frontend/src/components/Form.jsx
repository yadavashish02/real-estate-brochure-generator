import React, {useState} from 'react'
import { TONE_OPTIONS, LENGTH_OPTIONS } from '../constants/options.js'
import {generateApi} from '../api/generateApi.js'
import DropDown from './DropDown.jsx'
import TextBox from './TextBox.jsx'

const toneDefault = Object.values(TONE_OPTIONS)[0]
const lengthDefault = Object.values(LENGTH_OPTIONS)[0]

const Form = ({setOutput}) => {
    const [formData, setFormData] = useState({
        tone: toneDefault,
        lengthOfCopy: lengthDefault,
        featuresOfBuilding: "",
        brandPositioning: ""
    })

    const handleChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setOutput("Loading...")
            const result = await generateApi(formData)
            setOutput(result)
        } catch (error) {
            alert("Some error ocurred")
        }
    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="tone">Tone: </label>
            <DropDown
                id="tone"
                name="tone"
                options={TONE_OPTIONS}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="lenght">Length Of generated copy: </label>
            <DropDown
                id="length"
                name="lengthOfCopy"
                options={LENGTH_OPTIONS}
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="features">Features of the property: </label>
            <TextBox
                id="features"
                name="lengthOfCopy"
                placeholder="5 Buildings, Fitness Center, Swimming Pool, Connectivity to near metro station"
                onChange={handleChange}
            />
            <br/>
            <label htmlFor="positioning">Brand positioning: </label>
            <TextBox
                id="positioning"
                name="brandPositioning"
                onChange={handleChange}
                placeholder="Bespoke and modern apartments targeting the ultra high networth"
            />
            <br/>
            <button type="submit">Generate</button>
        </form>
        </>
    )


}

export default Form