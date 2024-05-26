export default async function apiHandler(data, route) {
    try {
        const url = `${import.meta.env.VITE_BACKEND_URL}${route}`
        const response = await fetch(url, {
           method: "POST",
           headers: {
            "Content-Type": "application/json"
           },
           body: JSON.stringify(data)
        })

        const result = await response.json()
        return result
    } catch (error) {
        console.error(error)
        throw error
    }
}