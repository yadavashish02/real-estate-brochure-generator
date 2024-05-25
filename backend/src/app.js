import express from "express"
import generateRoutes from './routes/generateRoutes'

const app = express()
app.use(express.json())
app.use('/api/v1', generateRoutes)