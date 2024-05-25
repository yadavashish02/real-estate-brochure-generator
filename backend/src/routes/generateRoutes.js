import express from 'express'
import { generate } from '../controllers/generateController'

const router = express.Router()
router.post("/generate", generate)

export default router