const express = require('express');
const nodemailer = require ('nodemailer');
const app = express();
const cors = require("cors");
require("dotenv").config();

<<<<<<< HEAD
=======

>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9
// //Middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            type: "Oauth2",
            user: process.env.EMAIL,
            pass: process.env.WORD,
<<<<<<< HEAD
            clientId: process.send.OAUTH_CLIENTID,
=======
            clientId: process.env.OAUTH_CLIENTID,
>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9
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
<<<<<<< HEAD
          from: `${req.body.formData.email}`,
          to: process.env.EMAIL,
          subject: `Message from: ${req.body.formData.email}`,
          text: `${req.body.formData.message}`,
=======
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
>>>>>>> c08b1e53458cde85690ee2ba6dfb114c72eea2e9
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


