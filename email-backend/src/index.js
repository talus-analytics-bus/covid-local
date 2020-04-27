const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const upload = multer()

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Email Sender');
});

app.post('/submit',  upload.none(), async (req, res) => {
  console.log('POST /submit ', req.body)
  const transporter = nodemailer.createTransport({
    service: 'gmail', 
    auth: {
      user: 'noreply@talusanalytics.com', 
      pass: 't@luS*2020!!', 
    }
  });

  transporter.sendMail(
    {
      from: 'noreply@talusanalytics.com', 
      to: 'rzimmerman@talusanalytics.com',
      subject: 'New Submission from COVID-Local',
      html: `<h1>New Submission from COVID-Local:</h1>
        <table>
          <tr>
            <td>First Name</td><td>&nbsp;&nbsp;${req.body.firstName}</td> 
          </tr>
          <tr>
            <td>Last Name</td><td>&nbsp;&nbsp;${req.body.lastName}</td> 
          </tr>
          <tr>
            <td>Email</td><td>&nbsp;&nbsp;${req.body.email}</td> 
          </tr>
          <tr>
            <td>Organization</td><td>&nbsp;&nbsp;${req.body.org}</td> 
          </tr>
          <tr>
            <td>Type</td><td>&nbsp;&nbsp;${req.body.type}</td> 
          </tr>
        </table>
        <h2>Message</h2>
        <p>${req.body.body}</p>`,
    }, 
    (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Sent: ' + info.response);
      }
    }
  )
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

