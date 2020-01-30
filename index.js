const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();

process.env.NODE_TLS_REJECT_UNAUTHORIZED='0'

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.post('/api/form', (req, res) => {
	debugger
	nodemailer.createTestAccount((err, account) => {
		const htmlEmail = `
        <h3>Details</h3>
            <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>
            ${req.body.message}
</p>
        `

		let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'rs.kokhanevychn@gmail.com',
				pass: 'hbdthcjan2020',
			}
		})

		let mailOptions = {
			from: 'rs.kokhanevychn@gmail.com',
			to: 'mykola.kokhanevich@gmail.com',
			replyTo: 'rs.kokhanevychn@gmail.com',
			subject: 'New message',
			text: req.body.message,
			html: htmlEmail
		}

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err)
				res.send(err.message)
			} else {
				res.send('Success')
			}
			console.log('Message sent: %s', info);
		})
	})
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`)
})
