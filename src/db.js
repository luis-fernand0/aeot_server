const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgre2024",
    database: "aeot_teste"
})

module.exports = client