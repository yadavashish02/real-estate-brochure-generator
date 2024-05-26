export function sendResponse(res, statusCode, message, data = {}) {
    res
    .status(statusCode)
    .json({message, data})
}