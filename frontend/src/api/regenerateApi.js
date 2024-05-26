import apiHandler from "./apiHandler.js"

export async function regenerateApi(data) {
    return await apiHandler(data, "/api/v1/regenerate")
}