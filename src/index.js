const express = require('express')
const cors = require('cors')
const client = require('./db.js')

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.listen(port, () => {
    console.log(`Server run in localhost:${port}`)
})

client.connect;

// VERIFICAÇÃO DO USUARIO, VERIFICANDO SE O USUARIO EXISTE NO BANCO DE DADOS
// ESTÁ REQUEST VEM DA PAGINA DE LOGIN
app.post('/', async (req, res, next) => {
    const user = req.body
    const userQuery = await client.query(`SELECT * FROM drivers WHERE email = '${user.email_login}' AND pass = '${user.password_login}'`)

    if(userQuery.rows.length === 0) {
        return res.send('Email ou Senha incorretos!')
    }
    res.send('Login realizado com sucesso!')
})

// CADASTRANDO USUARIO NO BANCO DE DADOS
// ESTÁ REQUISIÇÃO VEM DA PAGINA DE CADASTRO
app.post('/cadastro', (req, res) => {
    const user = req.body
    const insertQuery = `INSERT INTO drivers (full_name, email, phone, pass, car_plate, car_model) VALUES ( 
        '${user.full_name}',
        '${user.email}', 
        '${user.phone}', 
        '${user.pass}', 
        '${user.car_plate}', 
        '${user.car_model}' 
        )`

    client.query(insertQuery, (err, reuslt) => {
        if(!err) {
            res.send(`Você foi cadastrado! Retorne a pagina de login!`)
        } else {
            console.log(err.message)
        }
    })
    client.end;
})


client.connect();