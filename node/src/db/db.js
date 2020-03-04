import { Pool } from 'pg'

export default Pool({
    max: 10,
    connectionString: process.env.CSTRING
})