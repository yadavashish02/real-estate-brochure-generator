export default async function apiHandler(data, route) {
    try {
        const response = await fetch(`${process.env.BACKEND_URL}${route}`, {
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