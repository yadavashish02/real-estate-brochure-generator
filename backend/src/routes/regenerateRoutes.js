import express from 'express'
import { regenerate } from '../controllers/regenerateController.js'

const router = express.Router()
router.post("/regenerate", regenerate)

export default router