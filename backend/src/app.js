import express from "express"
import generateRoute from './routes/generateRoutes.js'
import insertRoute from './routes/insertRoutes.js'
import regenerateRoute from "./routes/regenerateRoutes.js"

const app = express()
const rootUrl = "/api/v1"
app.use(express.json())
app.use(rootUrl, generateRoute)
app.use(rootUrl, insertRoute)
app.use(rootUrl, regenerateRoute)

export default app