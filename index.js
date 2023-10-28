express = require('express')
routes = require('./routes/routes.js')
require('dotenv').config()

port = process.env.PORT
app = express()

app.use(express.json())

app.use(
	express.urlencoded({
		extended:true,
	})
)

//handle requests
routes.router(app);
//handle errors
const server = app.listen(port, (error) => {
	if (error) return console.log(`Error: ${error}`);
		console.log(`Server listening on port ${server.address().port}`);
});