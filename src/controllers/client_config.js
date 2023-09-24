module.exports.client_config = () => ({
  take2tech: {
    from: '"Tech" <tech@take2tech.ca>', // sender address
    to: "tech@take2tech.ca", // can be list 'tmurv@fdjfl.com temsk@fjdks.com'
    subject: "Contact Message Received",
    template: "email", // the name of the template file i.e email.handlebars
    context: {
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
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
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
      tttClient: "take2tech.ca",
    },
  },
});