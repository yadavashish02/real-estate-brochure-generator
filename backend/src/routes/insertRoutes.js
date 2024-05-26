import express from 'express'
import {insertIntoDB} from '../controllers/insertController.js'

const router = express.Router()
router.post('/insert', insertIntoDB)

export default router