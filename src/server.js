const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const {sendMail} = require("./controllers/send-mail");

const app = express()
const PORT = process.env.PORT ?? 4000;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Health Status: Success - New Location')
})

app.post('/send-mail', sendMail);
app.post('/reset-password', sendMail);
// app.post('/send-mail', (req, res) => {
//     console.log(req.body);
//     const nodemailer = require('nodemailer');
//     const {client} = req.query;
// })

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})
