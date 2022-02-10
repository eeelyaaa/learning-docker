const mysql=require('mysql')

const con = mysql.createConnection({
    host: "mysql",
    user: "root",
    password: "complexpassword",
    database: "Customers"
})

con.connect(function (e) {
    if (e) throw e
    console.log("Connected")
})

const express = require('express')

const app = express()

const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello Elya!'))

app.listen(port, () => console.log(`Example app listening on port ${port}`))