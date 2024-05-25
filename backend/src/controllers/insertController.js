import { insertCopy } from "../services/databaseService.js"
import { sendResponse } from "../utils/responseHandler.js"

export async function insertIntoDB(req, res) {
    const {tone, lengthOfCopy, featuresOfBuilding, brandPositioning, generatedCopy} = req.body
    try {
        const dbResponse = await insertCopy(brandPositioning, featuresOfBuilding, tone, lengthOfCopy, generatedCopy)
        sendResponse(res, 200, 'Data inserted successfully', {dbResponse})
    } catch (error) {
        sendResponse(res, 500, 'Error while inserrting in db', {error: error.message})
    }
}