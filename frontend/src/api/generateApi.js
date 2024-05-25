import apiHandler from "./apiHandler.js"

export async function generateApi(data) {
    return await apiHandler(data, "/api/v1/generate")
}