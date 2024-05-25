import { generateCopy } from "../services/llmService"
import { sendResponse  } from "../utils/responseHandler"

export async function generate(req, res) {
    const {tone, lengthOfCopy, featuresOfBuilding, brandPositioning} = req.body
    try {
        const generatedText = generateCopy(tone, lengthOfCopy, featuresOfBuilding, brandPositioning)
        sendResponse(res, 200, 'Copy generated succesfully', {generatedText})
    } catch (error) {
        sendResponse(res, 500, 'Something bad happened', {error: error.message})
    }
}