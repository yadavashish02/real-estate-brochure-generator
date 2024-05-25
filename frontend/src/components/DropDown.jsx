import React, {useState} from "react"

const DropDown = ({options, onChange, defaultValue=Object.keys(options)[0]}) => {
    const [selected, setSelected] = useState(defaultValue)

    const handleChange = (event) => {
        setSelected(event.target.value)
        onChange(event.target.value)
    }

    return (
        <>
        <select value={selected} onChange={handleChange}>
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