const {client_config} = require("./client_config")

module.exports.sendMail = (req, res) => {
    const hbs = require('nodemailer-express-handlebars');
    const nodemailer = require('nodemailer');
    const path = require('path');
    const client = req.params?req.params.client:undefined;

    if (!client || !client_config[client]) {
        return res.status(404).send("Client not found.");
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

    // working configuration
    // const mailOptions = {
    //     from: '"Tech" <tech@take2tech.ca>', // sender address
    //     to: 'tech@take2tech.ca', // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
    //     subject: 'Contact Message Received',
    //     template: 'email', // the name of the template file i.e email.handlebars
    //     context: {
    //         name: req.body?.name,
    //         email: req.body?.email,
    //         message: req.body?.message,
    //         tttClient: "take2tech.ca"
    //     }
    // };

    transporter.sendMail(client_config[client], function (error, info) {
        if (error) {
            console.log(error.message);
            return res.send(`ERROR: ${error.message}`);
        }

        console.log(`Message sent: ${info && info.response}`);
        res.send(`Message sent: ${info && info.response}`);
    });
}
