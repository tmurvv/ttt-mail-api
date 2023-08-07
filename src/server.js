const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const {sendMail} = require("./controllers/send-mail");

const app = express()
const port = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.get('/', (req, res) => {
    res.send('Health Status: Success - New Location')
})

app.post('/send-mail', sendMail);

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})
