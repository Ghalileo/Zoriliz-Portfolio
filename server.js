const express = require('express');
const nodemailer = require ('nodemailer');
const app = express();
const cors = require("cors");
require("dotenv").config();

// //Middleware
app.use(express.json());
app.use(cors());

let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth:{
            type: "Oauth2",
            user: process.env.EMAIL,
            pass: process.env.WORD,
            clientId: process.send.OAUTH_CLIENTID,
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
          from: `${req.body.formData.email}`,
          to: process.env.EMAIL,
          subject: `Message from: ${req.body.formData.email}`,
          text: `${req.body.formData.message}`,
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


