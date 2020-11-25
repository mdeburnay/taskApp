const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "de_burnay@hotmail.co.uk",
    subject: "Testing 123",
    text: `Welcome to the App, ${name}. Please do let me know how you get on!`,
  });
};

const deleteAccountEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "de_burnay@hotmail.co.uk",
    subject: `Sorry to see you go, ${name}!`,
    text: "If there is anything we could have improved, please let us know!",
  });
};

module.exports = {
  sendWelcomeEmail,
  deleteAccountEmail,
};
