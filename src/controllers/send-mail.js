const {getEmail} = require("./get-email")

module.exports.sendMail = (req, res) => {
    const nodemailer = require('nodemailer');
    const {client} = req.query;

    if (!client) {
        return res.status(400).send("Client parameter not found in url.");
    }

    const transporter = nodemailer.createTransport(
        {
            host: process.env.MAIL_SERVER,
            port: 443,
            secure: true,
            auth: {
                user: process.env.MAIL_LOGIN,
                pass: process.env.MAIL_PASSWORD
            }
        }
    );

    const options = {
        customer: req.body,
        client
    }

    const email = getEmail(options);

    if (!email) {
        return res.status(400).send("Client not found.")
    }

    transporter.sendMail(email, function (error, info) {
        if (error) {
            console.log(error.message);
            return res.send(`ERROR: ${error.message}`);
        }

        console.log(`Message sent: ${info && info.response}`);
        res.send(`Message sent: ${info && info.response}`);
    });
}
