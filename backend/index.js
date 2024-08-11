var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./config');
var transport = {
    host: 'smtp.gmail.com', //replace with host of your provider
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}
var transporter = nodemailer.createTransport(transport)
transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});
router.post('/send', (req, res, next) => {
  var name = req.body.name
  var email = req.body.email
  var contact = req.body.contact
  var message = req.body.message
  var content = `name: ${name} \n email: ${email} \n contact: ${contact} \n message: ${message} `
  var mail = {
    from: name,
    to: 'mysecundainfotech@gmail.com',  //email address to receive messages on
    subject: 'New Message from Contact Form',
    text: content
  }
  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
    }
  })
})
const https = require('https');
const fs = require('fs');
const path = require('path');
//const express = require('express');

const app = express();
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3003)

// Configure SSL/TLS certificates
const privateKey = fs.readFileSync(path.join(__dirname, '.certs/privkey.pem'), 'utf8');
const certificate = fs.readFileSync(path.join(__dirname, '.certs/fullchain.pem'), 'utf8');
const ca = fs.readFileSync(path.join(__dirname, '.certs/fullchain.pem'), 'utf8');

const credentials = { key: privateKey, cert: certificate, ca: ca };

// Configure your express app routes and middleware here...

const httpsServer = https.createServer(credentials, app);

const PORT = 3003;

httpsServer.listen(PORT, () => {
  console.log(`Server running on https://hehe:${PORT}`);
});
