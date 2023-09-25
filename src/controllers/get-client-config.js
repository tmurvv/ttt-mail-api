module.exports.getClientConfig = (client, body) => {
  return {
    take2tech: {
      from: '"Tech" <tech@take2tech.ca>', // sender address
      to: "tech@take2tech.ca", // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
      subject: "Contact Message Received",
      template: "email", // the name of the template file i.e email.handlebars
      context: {
        name: body.name,
        email: body.email,
        message: body.message,
        tttClient: "take2tech.ca",
      },
    },
    jdolanstories: {
      // from: '"Ron" <ron@murvihill.net>', // sender address
      from: '"Tech" <tech@take2tech.ca>', // sender address
      // to: 'ron@murvihill.net', // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
      to: "tmurv@shaw.ca", // TODO replace with ron once testing complete
      subject: "J. Dolan Stories Contact Message Received",
      template: "email", // the name of the template file i.e email.handlebars
      context: {
        name: body.name,
        email: body.email,
        message: body.message,
        tttClient: "take2tech.ca",
      },
    },
  }
};