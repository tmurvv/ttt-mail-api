module.exports.sendMail = (req, res) => {
    const hbs = require('nodemailer-express-handlebars')
    const nodemailer = require('nodemailer')
    const path = require('path')

    console.log('req', req.body);

    // initialize nodemailer
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

    // point to the template folder
    const emailTemplateOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };

    // use a template file with nodemailer
    transporter.use('compile', hbs(emailTemplateOptions))

    const mailOptions = {
        from: '"Tech" <tech@take2tech.ca>', // sender address
        to: 'tech@take2tech.ca', // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
        subject: 'Contact Message Received',
        template: 'email', // the name of the template file i.e email.handlebars
        context: {
            name: req.body?.name,
            email: req.body?.email,
            message: req.body?.message,
            tttClient: "take2tech.ca"
        }
    };

    // trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function (error, info) {
        console.log('imin')
        if (error) {
            console.log(error.message);
            res.send(`ERROR: ${error.message}`);
        }
        console.log(`Message sent: ${info.response}`);
        res.send(`Message sent: ${info.response}`);
    });
}
