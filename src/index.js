const express = require('express')
const client = require('./db.js')
const bodyparser = require('body-parser')


const app = express()
app.use(bodyparser.json())
const port = 3000

app.listen(port, () => {
    console.log(`Server run in localhost:${port}`)
})

client.connect;

app.get('/cadastro', (req, res) => {
    client.query('SELECT * FROM drivers', (err, result) => {
        if(!err) {
            console.log(result.rows)
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/cadastro', (req, res) => {
    const user = req.body
    console.log(user)
    const insertQuery = `INSERT INTO drivers VALUES (
        ${user.code}, 
        ${user.full_name}, 
        ${user.phone}, 
        ${user.pass}, 
        ${user.car_plate}, 
        ${user.car_model} 
        )`

    client.query(insertQuery, (err, reuslt) => {
        if(!err) {
            res.send(`Insertion in table sucessful!`)
            res.send(`Datas insert ${user}`)
        } else {
            console.log(err.message)
        }
    })
    client.end;
})


client.connect();