import React, {useState} from "react"

const TextInput = ({id, name, placeholder, onChange}) => {
    const [input, setInput] = useState("")

    const handleChange = (event) => {
        setInput(event.target.value)
        onChange(event)
    }

    return (
        <input
            type="text"
            id={id}
            name={name}
            value={input}
            onChange={handleChange}
            placeholder={placeholder}
            required
        />
    )
}

export default TextInput