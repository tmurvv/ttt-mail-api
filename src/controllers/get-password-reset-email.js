const clients = require("../data/clients");

module.exports.getPasswordResetEmail = (options) => {
    // TODO get rid of hard-coded FE in email URL
    console.log("options", options);

    const {client, from, url, useremail} = options;

    if (!clients[client]) {
        return;
    }

    const emailEncode = btoa(useremail);
    return ({
        from: `Testing <${client}>`,
        to: `<${useremail}>`, // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
        subject: "Password Reset Received",
        text: `Welcome ${useremail}, please click the button below to reset your password.`,
        html: `<html>
                        <body style="color:#083a08; font-family: Lato, Arial, Helvetica, sans-serif;
                                                    line-height:1.8em;">
                            <h2>Message from Ultimate Renovations Timesheets</h2>
                            <p>Dear ${useremail},<br><br>Please click on the link below to
                                reset your password.</p>
                            <p style="text-decoration: underline; font-size: 24px;"><a style="color:#4054b2;font-weight: 600;" href="https://timesheets.ultrenos.ca/?reset=${emailEncode}"> Reset Password</a></p>
                            <p><strong>&copy;2021 <a href="https://take2tech.ca" style="color:#4054b2;font-weight: 600; text-decoration: underline;">take2tech.ca</strong></p>
                        </body>
                    </html>`
    });

};