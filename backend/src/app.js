import express from "express"
import generateRoutes from './routes/generateRoutes.js'

const app = express()
app.use(express.json())
app.use('/api/v1', generateRoutes)

export default app