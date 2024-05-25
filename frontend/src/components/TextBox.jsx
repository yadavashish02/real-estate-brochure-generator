import React, {useState} from "react"

const TextInput = ({placeholder, onChange}) => {
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
        onChange(event.target.value)
    }

    return (
        <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder={placeholder}
        />
    )
}

export default TextInput