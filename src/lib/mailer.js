const nodemailer = require('nodemailer')
module.exports = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
        user: '5df336bbced85b',
        pass: '6ccdea1a90e2f6'
    }
})
