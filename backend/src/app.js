import express from "express"
import generateRoute from './routes/generateRoutes.js'
import insertRoute from './routes/insertRoutes.js'
import regenerateRoute from "./routes/regenerateRoutes.js"

const app = express()
const rootUrl = "/api/v1"
app.use(express.json())
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Content-Type,Authorization")
    res.header("Access-Control-Allow-Methods","POST")
    next()
})
app.use(rootUrl, generateRoute)
app.use(rootUrl, insertRoute)
app.use(rootUrl, regenerateRoute)

export default app