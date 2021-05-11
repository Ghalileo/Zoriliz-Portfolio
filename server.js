const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require ('nodemailer');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/',()=>{
    resizeBy.send('Welcome to my FormA')
})

app.post('/api/forma', (req, res)=>{

    let data = req.body;
    let smtpTransport = nodemailer.createTransport({
        service: 'Gmail',
        port: 465,
        auth:{
            user:'',
            pass:''
        }
    })
    let mailOptions = {
        from: data.email, // sender address
        to: "ose.okogbo@gmail.com", // list of receivers
        subject: `Message from ${data.name}` , // Subject line
        text: "Hello world?", // plain text body
        html: `
            <h3>Sender Details</h3>
            <ul>
                    <li>${data.name}</li>
                    <li>${data.email}</li>
                    <li>${data.subject}</li>
                </ul>
            <h3>Message</h3>
            <p>${data.message}</p>`, // html body
    }

    smtpTransport.sendMail(mailOptions, (error,response) => {
        if (error){
            res.send(error)
        }
        else {
            res.send(`success! YAAAY`)
        }
    })
    smtpTransport.close
})


// const PORT = process.env.PORT || 5000;

// //Middleware
// app.get('/' , (req, res)=> {
//     res.sendFile(_dirname + '/src/pages/Contact.js')
// })

// app.listen(PORT, () =>{
//     console.log(`server running on port ${PORT}`)
// })