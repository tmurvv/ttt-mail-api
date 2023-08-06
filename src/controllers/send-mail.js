module.exports.sendMail = (req,res) => {
    const hbs = require('nodemailer-express-handlebars')
    const nodemailer = require('nodemailer')
    const path = require('path')

// initialize nodemailer
    const transporter = nodemailer.createTransport(
        {
            service: process.env.MAIL_SERVER,
            port: 443,
            secure: true,
            auth:{
                user: process.env.MAIL_LOGIN,
                pass: process.env.MAIL_PASSWORD
            }
        }
    );
console.log(process.env.MAIL_LOGIN)
// point to the template folder
    const handlebarOptions = {
        viewEngine: {
            partialsDir: path.resolve('./views/'),
            defaultLayout: false,
        },
        viewPath: path.resolve('./views/'),
    };

// use a template file with nodemailer
    transporter.use('compile', hbs(handlebarOptions))

    const mailOptions = {
        from: '"Tech" <tech@take2tech.ca>', // sender address
        to: 'tmurv@shaw.ca', // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
        subject: 'Welcome!',
        template: 'email', // the name of the template file i.e email.handlebars
        context:{
            name: "Murv",
            company: 'Murv Company'
        }
    };

// trigger the sending of the E-mail
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error.message);
        }
        console.log('Message sent: ' + info.response);
    });

    res.send('bottom send mail')
}
