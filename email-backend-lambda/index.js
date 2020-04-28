exports.handler = async (event, context, callback) => {
  var nodemailer = require('nodemailer');
  var smtpTransport = require('nodemailer-smtp-transport');

  const transporter = nodemailer.createTransport(smtpTransport({
    service: 'gmail',
    auth: {
      user: 'noreply@talusanalytics.com',
      pass: 't@luS*2020!!',
    }
  }));

  if (event.body !== null && event.body !== undefined) {
      let body = JSON.parse(event.body);

      if (body.firstName) {
          global.firstName = body.firstName;
      }
      if (body.lastName) {
          global.lastName = body.lastName;
      }
      if (body.email) {
          global.email = body.email;
      }
      if (body.org) {
          global.org = body.org;
      }
      if (body.type) {
          global.type = body.type;
      }
      if (body.body) {
          global.email_body = body.body;
      }

      global.html = `<h1>New Submission from COVID-Local:</h1>
        <table>
          <tr>
            <td>First Name</td><td>&nbsp;&nbsp;${global.firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td><td>&nbsp;&nbsp;${global.lastName}</td>
          </tr>
          <tr>
            <td>Email</td><td>&nbsp;&nbsp;${global.email}</td>
          </tr>
          <tr>
            <td>Organization</td><td>&nbsp;&nbsp;${global.org}</td>
          </tr>
          <tr>
            <td>Type</td><td>&nbsp;&nbsp;${global.type}</td>
          </tr>
        </table>
        <h2>Message</h2>
        <p>${global.email_body}</p>`;
  }

  var mailOptions = {
    from: 'noreply@talusanalytics.com',
    to: 'COVIDLocal@nti.org',
    subject: 'New Submission from COVID-Local',
    html: global.html
  };

  const response = await transporter.sendMail(mailOptions);

  return response;
};
