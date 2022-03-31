const express = require('express')
const app = express()

app.get('/', function (_, res) {
	res.send("It's working from server!")
})

app.get('/api', function (_, res) {
	res.json({ message: 'Hello from server side' })
})

app.listen(3001, () => {
	console.log('app listening on port 3001')
})
