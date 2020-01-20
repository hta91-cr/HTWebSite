//imports
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
//end imports 

admin.initializeApp();

exports.sendEmail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        let authData = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: true,
            requireTLS: true,
            service:'gmail',
            auth: {
                user: 'hta200891',
                pass: 'ujrxcxcduxcvvjyv'
            }
        });
        authData.sendMail({
            from: req.query.email,
            to: 'hta200891@gmail.com',
            subject: req.query.name + ' ' + req.query.lastname+ ' ' + req.query.email,
            text: req.query.message,
        }).then(result =>{
           return res.status(200).json({id:0, message:'Successfully sent email'})
        }).catch(err =>{
           return res.status(500).json({id:1, message:err})
        });
    })
});
