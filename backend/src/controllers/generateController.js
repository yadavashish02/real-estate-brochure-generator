import { generateCopy } from "../services/llmService.js"
import { sendResponse  } from "../utils/responseHandler.js"

export async function generate(req, res) {
    const {tone, lengthOfCopy, featuresOfBuilding, brandPositioning} = req.body
    try {
        const generatedText = await generateCopy(tone, lengthOfCopy, featuresOfBuilding, brandPositioning)
        sendResponse(res, 200, 'Copy generated succesfully', {generatedText})
    } catch (error) {
        sendResponse(res, 500, 'Something bad happened', {error: error.message})
    }
}