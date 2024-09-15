module.exports.getTestEmail = (options) => {
    const {fullClient} = options;

    return ({
        from: `<tech@take2tech.ca>`,
        to: fullClient.email, // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
        subject: "Testing Email Received",
        html: `
            <!DOCTYPE html>
            <html lang="en">
                <head>
                <meta charset="utf-8">
                <meta http-equiv="x-ua-compatible" content="ie=edge">
                <title>Notice of test-email</title>
            </head>
            <body>
                <h2>Hello ${fullClient.business}! </h2>
                <p>This is a test.</p>
            </body>
            </html>
            `
    })
};