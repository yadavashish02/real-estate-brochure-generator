import React, {useState} from "react"

const DropDown = ({id, name, options, onChange, defaultValue=Object.keys(options)[0]}) => {
    const [selected, setSelected] = useState(defaultValue)

    const handleChange = (event) => {
        setSelected(event.target.value)
        onChange(event)
    }

    return (
        <>
        <select value={selected} onChange={handleChange} id={id} name={name}>
            {Object.keys(options).map((key) => {
                return(
                <option key={key} value={options[key]}>
                    {key}
                </option>
                )
            })}
        </select>
        </>
    )
}

export default DropDown