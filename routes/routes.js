twilio = require('./twilio/twilio.js')
require('dotenv').config()

myPhone = process.env.MY_PHONE_NUMBER

const router = (app) => {
    //default GET
    app.get("/", (request, response) => {
		response.send({
			message: "virtual secretary",
		})
	})
	//call user
	app.get("/callTest", (request, response) => {
		twilio.makeCall(myPhone)
		response.send({
			message: "call made",
		})
	})

	//
}

module.exports = { router };