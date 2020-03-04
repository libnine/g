import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import routes from './routes'
import pg, { Client } from 'pg'

const app = express()
const client = new Client()
client.connect()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes.logs)
app.use(routes.checks)

app.listen(process.env.PORT, () => {
    console.log(`listening on ${process.env.PORT}`)
})