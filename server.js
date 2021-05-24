const express = require('express');
const nodemailer = require ('nodemailer');
const app = express();
const cors = require("cors");
require("dotenv").config();

// //Middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
        // service: 'Gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth:{
            type: "Oauth2",
            user: process.env.EMAIL,
            pass: process.env.WORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
    });

    transporter.verify((err, success) => {
        err
          ? console.log(err)
          : console.log(`=== Server is ready to take messages: ${success} ===`);
       });

       app.post("/send", function (req, res) {
        let mailOptions = {
          from: `${req.body.formdata.name}`,
          to: process.env.EMAIL,
          subject: `Message from: ${req.body.formdata.name}`,
          text: `${req.body.formdata.message}`,
          html: `<h3>Message Contents</h3>
                  <ul>
                  <li>Name: ${req.body.formdata.name}</li>
                  <li>Email: ${req.body.formdata.email}</li>
                  <li>Subject: ${req.body.formdata.subject}</li>
                  <li>Message: ${req.body.formdata.message}</li>
                  </ul>
          `
        };
       
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            res.json({
              status: "fail",
            });
          } else {
            console.log("== Message Sent ==");
            res.json({
              status: "success",
            });
          }
        });
       });
     




const PORT = process.env.PORT ||3001;
app.listen(PORT, () =>{
    console.log(`server starting on port ${PORT}`)
})


