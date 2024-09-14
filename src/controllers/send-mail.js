const {getEmail} = require("./get-email")
const {getPasswordResetEmail} = require("./get-password-reset-email");

module.exports.sendMail = (req, res) => {
    console.log(req.body)

    const {client} = req.query;
    console.log(client)
    const nodemailer = require('nodemailer');

    if (!client) {
        return res.status(400).send("Client parameter not found in url.");
    }

    const transporter = nodemailer.createTransport(
        {
            // host: process.env.MAIL_SERVER,
            host: "mail.smtp2go.com",
            port: 443,
            secure: true,
            auth: {
                // user: process.env.MAIL_LOGIN,
                // pass: process.env.MAIL_PASSWORD
                user: "tmurv",
                pass: "weSSpound4ling"
            }
        }
    );

    const options =
    {...req.body, client}

    // const email = getEmail(options);
    const email = getPasswordResetEmail(options);

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
