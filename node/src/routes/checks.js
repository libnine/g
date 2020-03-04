import { Router } from 'express'
import client from '../index'

const router = Router();

router.get('/checks', (req, res) => {
    return res.send("checks working")
})

export default router