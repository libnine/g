import { Router } from 'express'
import q from '../db'

const router = Router();

router.get('/checks', (req, res) => {
  return res.send("checks working")
})

export default router