module.exports.getPasswordResetEmail = (options) => {
  const { fullClient, from, url, useremail } = options;

  if (!from || !url || !useremail || !fullClient) {
    return "Error Sending email. Not enough information.";
  }

  const emailEncode = btoa(useremail);
  const resetUrl = `${url.split("reset=")[0]}reset=${emailEncode}`;

  return {
    from: `<${from}>`,
    to: `<${useremail}>`, // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
    subject: "Password Reset Received",
    text: `Welcome ${useremail}, please click the button below to reset your password.`,
    html: `<html lang="en">
                        <body style="color:#083a08; font-family: Lato, Arial, Helvetica, sans-serif;
                                                    line-height:1.8em;">
                            <h2>Message from ${fullClient.business}</h2>
                            <p>Dear ${useremail},<br><br>Please click on the link below to
                                reset your password.</p>
                            <p style="text-decoration: underline; font-size: 24px;"><a style="color:#4054b2;font-weight: 600;" href=${resetUrl}> Reset Password</a></p>
                            <p><strong>&copy;2024 <a href="https://take2tech.ca" style="color:#4054b2;font-weight: 600; text-decoration: underline;">take2tech.ca</strong></p>
                        </body>
                    </html>`,
  };
};
