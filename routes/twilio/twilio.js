require('dotenv').config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const twilioPhone = process.env.TWILIO_PHONE_NUMBER
const testMP3 = process.env.PUBLIC_TEST_MP3

const client = require('twilio')(accountSid, authToken)

function makeCall (targetNumber) {
	client.calls.create({
		twiml: `<Response><Play>${testMP3}</Play></Response>`,
        to: targetNumber,
        from: twilioPhone
	})
	.then(call => console.log(call.sid))
}

module.exports = { makeCall }