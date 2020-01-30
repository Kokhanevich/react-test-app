# react-test-app

First of all, change email address and pass in index.js

        let transporter = nodemailer.createTransport({
			host: 'smtp.gmail.com',
			port: 587,
			auth: {
				user: 'rs.kokhanevychn@gmail.com',
				pass: 'xxxxxxxx',
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

Please, download all dependencies from package.json and client/package.json 
	
In the project directory, you can run:

### `npm run dev`
