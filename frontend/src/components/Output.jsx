import React, {useState, useRef} from 'react'
import { regenerateApi } from '../api/regenerateApi'

const Output = ({output, setOutput}) => {
    const [selectedText, setSelectedText] = useState("")
    const [popupVisible, setPopupVisible] = useState(false)
    const [popupPos, setPopupPos] = useState({
        top: 0,
        left: 0
    })
    const outputRef = useRef(null)

    const handleMouseUp = () => {
        const selection = window.getSelection()
        const text = selection.toString()

        if(text) {
            const range = selection.getRangeAt(0)
            const rect = range.getBoundingClientRect()
            setPopupPos({top: rect.bottom, left: rect.left})
            setSelectedText(text)
            setPopupVisible(true)
        } else {
            setPopupVisible(false)
        }
    }

    const handleClick = async (event) => {
        const completeText = outputRef.current.innerText
        try {
            console.log(event.target.value);
            const result = await regenerateApi({completeText,selectedText,lengthModification: event.target.value})
            setOutput(result.data.generatedText)
        } catch (error) {
            console.error(error)
            alert("Something bad happened")
        }
    }

    return (
        <>
        <div>
        <div
            style={{border: "2px solid black", marginTop: 10, padding: 5, marginBottom: 10, maxWidth: 600}}
            ref={outputRef}
            onMouseUp={handleMouseUp}
        >
        <pre>{output}</pre>
        </div>
        {popupVisible && (
            <>
            <button onClick={handleClick} value="shorter">Make it shorter</button>
            <button onClick={handleClick} value="longer">Make it longer</button>
            </>
        )}
        </div>
        </>
    )
}

export default Output