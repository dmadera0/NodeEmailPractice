require('dotenv').config();

const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOptions = {
    from: 'dmadera0@gmail.com',
    to: 'dmadera0@gmail.com',
    subject: 'Testing and Testing',
    text: "Please pray that this works"
};


transporter.sendMail(mailOptions, function(err,data){
    if (err) {
        console.log('Error Occurs', err);    
    } else {
        console.log('Email sent!!!!!!')
    }
});

