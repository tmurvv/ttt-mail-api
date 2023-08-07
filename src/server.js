const express = require('express')
const test = require('dotenv').config()
const app = express()
const port = 3000
const {sendMail} = require("./controllers/send-mail")

console.log('test', test)
app.get('/', (req, res) => {
    res.send('Health Status: Success - New Location')
})

app.get('/send-mail', sendMail);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
