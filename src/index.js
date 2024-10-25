const express = require('express')
const client = require('./db.js')

const app = express()
app.use(express.json())
const port = 3000

app.listen(port, () => {
    console.log(`Server run in localhost:${port}`)
})

client.connect;

app.post('/cadastro', (req, res) => {
    const user = req.body
    console.log(user)
    const insertQuery = `INSERT INTO drivers (full_name, email, phone, pass, car_plate, car_model) VALUES ( 
        '${user.full_name}',
        '${user.email}', 
        '${user.phone}', 
        '${user.pass}', 
        '${user.car_plate}', 
        '${user.car_model}' 
        )`
        console.log(insertQuery)


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