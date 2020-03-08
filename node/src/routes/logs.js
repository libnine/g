import { Router } from 'express'
import q from '../db'

const router = Router();

router.get('/logs', (req, res) => {
  q('SELECT * FROM testtable', null, (e, r) => {
    if (e) throw e
    res.send(`${r.rows[0]}`)
  })
})

export default router