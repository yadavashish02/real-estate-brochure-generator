import apiHandler from "./apiHandler.js"

export async function insertApi(data) {
    return await apiHandler(data, "/api/v1/insert")
}