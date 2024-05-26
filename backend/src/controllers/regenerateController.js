import { regenerateCopy } from "../services/llmService.js"
import { sendResponse  } from "../utils/responseHandler.js"

export async function regenerate(req, res) {
    const {completeText, selectedText, lengthModification} = req.body
    try {
        const generatedText = await regenerateCopy(completeText, selectedText, lengthModification)
        sendResponse(res, 200, 'Copy generated succesfully', {generatedText})
    } catch (error) {
        sendResponse(res, 500, 'Something bad happened', {error: error.message})
    }
}