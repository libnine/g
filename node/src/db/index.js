import 'dotenv/config'
import { Pool } from 'pg'

const config = {
  user: process.env.PGUSER,
  database: process.env.PGDB,
  host: process.env.PGHOST,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
  max: 10,
  idleTimeoutMillis: 30000
}

const pool = new Pool(config)

export default function q(text, values, cb) {
  pool.connect((err, client, done) => {
    if (err) throw err

    client.query(text, values, (err, rows) => {
      done()
      cb(err, rows)
    })
  })
}
