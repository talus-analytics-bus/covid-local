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
      console.log(event.body)
      console.log(event.isBase64Encoded)

      if (event.isBase64Encoded === true) {
        let buff = Buffer.from(event.body, 'base64');
        let text = buff.toString('ascii');
        var body = JSON.parse(text);
      } else {
        var body = JSON.parse(event.body);
      }

      if (body.firstName) {
          var firstName = body.firstName;
      }
      if (body.lastName) {
          var lastName = body.lastName;
      }
      if (body.email) {
          var email = body.email;
      }
      if (body.org) {
          var org = body.org;
      }
      if (body.type) {
          var type = body.type;
      }
      if (body.body) {
          var email_body = body.body;
      }

      global.html = `<h1>New Submission from COVID-Local:</h1>
        <table>
          <tr>
            <td>First Name</td><td>&nbsp;&nbsp;${firstName}</td>
          </tr>
          <tr>
            <td>Last Name</td><td>&nbsp;&nbsp;${lastName}</td>
          </tr>
          <tr>
            <td>Email</td><td>&nbsp;&nbsp;${email}</td>
          </tr>
          <tr>
            <td>Organization</td><td>&nbsp;&nbsp;${org}</td>
          </tr>
          <tr>
            <td>Type</td><td>&nbsp;&nbsp;${type}</td>
          </tr>
        </table>
        <h2>Message</h2>
        <p>${email_body}</p>`;
  }

  var mailOptions = {
    from: 'noreply@talusanalytics.com',
    to: 'COVIDLocal@nti.org',
    subject: 'New Submission from COVID-Local',
    html: global.html
  };

  const response = await transporter.sendMail(mailOptions);

  return {
    statusCode: 200,
    body: JSON.stringify(response),
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Origin': '*'
    },
    isBase64Encoded: false
  };
};
