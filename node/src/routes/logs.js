import { Router } from 'express'

const router = Router();

router.get('/logs', (req, res) => {
    return res.send("logs working")
})

export default router