const { getEmail } = require("./get-email");
const { getPasswordResetEmail } = require("./get-password-reset-email");
const { getTestEmail} = require("./get-test-email");
const clients = require("../data/clients");

const emailType = {
  "ultrenostimesheets": getPasswordResetEmail,
  "tmurv": getTestEmail,
  "albertaharpist": getEmail,
  "jdolanstories": getEmail
}

module.exports.sendMail = (req, res) => {
  const { client } = req.query;
  const nodemailer = require("nodemailer");
  const fullClient = {...clients[client], key: client};

  if (!fullClient) {
    return res.status(400).send("Client not found.");
  }

  const options = { ...req.body, fullClient };
  const email = emailType[fullClient.key](options);

  if (!email) {
    return res.status(400).send("Email template not found.");
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

  transporter.sendMail(email, function (error, info) {
    if (error) {
      console.log(error.message);
      return res.send(`ERROR: ${error.message}`);
    }

    console.log(`Message sent: ${info && info.response}`);
    res.send(`Message sent: ${info && info.response}`);
  });
};
