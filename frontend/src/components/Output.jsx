const Output = ({output, setOutput}) => {
    return (
        <>
        <div style={{border: "2px solid black", marginTop: 10, padding: 5, marginBottom: 10, maxWidth: 600}}>
        <pre>{output}</pre>
        </div>
        </>
    )
}

export default Output