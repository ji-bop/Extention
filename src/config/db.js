const { Pool } = require('pg')

module.exports = new Pool({
    user: 'postgres',
    password: 'Z%ck9aw%sU[z@^(i]]*',
    host: 'localhost',
    port: 5432,
    database: 'launchstoredb'
})
