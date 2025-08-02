module.exports.getEmail = (options) => {
  const { fullClient } = options;

  return {
    from: `TECH <tech@take2tech.ca>`,
    to: fullClient.email, // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
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
                <h2>Hello ${fullClient.name}! </h2>
                <p>We have received a message on your contact page. Here are the details: </p>
                <p>Contact Name: ${options.customer?.name ?? options.name}</p>
                <p>Contact Email: ${options.customer?.email ?? options.email}</p>
                <p>Contact Phone: ${options.customer?.phone ?? options.phone}</p>
                <p>Contact Message: ${options.customer?.message ?? options.message}</p>
            </body>
            </html>
            `,
  };
};
