const { getEmail } = require("./get-email");
const { getPasswordResetEmail } = require("./get-password-reset-email");
const { getTestEmail} = require("./get-test-email");

const emailType = {
  "ultrenosTimesheets": getPasswordResetEmail,
  "tmurv": getTestEmail,
  "default": getEmail
}

module.exports.sendMail = (req, res) => {
  const { client } = req.query;
  const nodemailer = require("nodemailer");

  if (!client) {
    return res.status(400).send("Client parameter not found in url.");
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_SERVER,
    port: 443,
    secure: true,
    auth: {
      user: process.env.MAIL_LOGIN,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const options = { ...req.body, client };
  const email = emailType[client ?? "default"](options);

  if (!email) {
    return res.status(400).send("Email template not found.");
  }

  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error.message);
      return res.send(`ERROR: ${error.message}`);
    }

    console.log(`Message sent: ${info && info.response}`);
    res.send(`Message sent: ${info && info.response}`);
  });
};
