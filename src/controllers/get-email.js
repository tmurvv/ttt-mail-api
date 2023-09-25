const clients = require("../data/clients");

module.exports.getEmail = (options) => {
  const {client} = options;

  if (!clients[client]) {
      return;
  }

  return ({
      from: `TECH <tech@take2tech.ca>`,
      to: clients[client].email, // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
      subject: "Contact Message Received",
      html: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>Notice of message from contact page</title>
            </head>
            <body>
                <h2>Hello ${clients[client].name}! </h2>
                <p>We have received a message on your contact page. Here are the details: </p>
                <p>Contact Name: ${options.customer.name}</p>
                <p>Contact Email: ${options.customer.email}</p>
                <p>Contact Message: ${options.customer.message}</p>
            </body>
            </html>
            `
  })
};