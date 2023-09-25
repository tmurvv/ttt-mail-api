const {getClientConfig} = require("./get-client-config")

module.exports.sendMail = (req, res) => {
    const hbs = require('nodemailer-express-handlebars');
    const nodemailer = require('nodemailer');
    const path = require('path');
    const {client} = req.query;

    if (!client) {
        return res.status(400).send("Client parameter not found in url.");
    }

    const clientConfig = getClientConfig(client, req.body);

    if (!clientConfig[client]) {
        return res.status(400).send("Client not found.");
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

    const emailTemplateOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };

    transporter.use('compile', hbs(emailTemplateOptions))

    transporter.sendMail(clientConfig[client], function (error, info) {
        if (error) {
            console.log(error.message);
            return res.send(`ERROR: ${error.message}`);
        }

        console.log(`Message sent: ${info && info.response}`);
        res.send(`Message sent: ${info && info.response}`);
    });
}
