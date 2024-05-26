import express from "express"
import generateRoutes from './routes/generateRoutes.js'
import insertRoutes from './routes/insertRoutes.js'
import regenerateRoutes from "./routes/regenerateRoutes.js"

const app = express()
const rootUrl = "/api/v1"
app.use(express.json())
app.use(rootUrl, generateRoutes)
app.use(rootUrl, insertRoutes)
app.use(rootUrl, regenerateRoutes)

export default app