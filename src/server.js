const express = require('express')
const test = require('dotenv').config();
const app = express()
const {sendMail} = require("./controllers/send-mail")
const port = process.env.PORT;

console.log('test', test)
app.get('/', (req, res) => {
    res.send('Health Status: Success - New Location')
})

app.get('/send-mail', sendMail);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
