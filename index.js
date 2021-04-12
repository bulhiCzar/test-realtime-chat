const express = require('express')
const bodyParser = require('body-parser')

const PORT = process.env.PORT || 4000

const app = express()

app.use(bodyParser.json())

app.use('/api', require('./api'))

app.use('/', express.static(`./client/build`))
app.use('*', express.static(`./client/build`))



app.listen(PORT)