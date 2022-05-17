const express = require('express')
const router = require('./router/router')

const app = express();
const port = process.env.PORT || 5000
app.use('/route', router)

app.listen(port, ()=>console.log(`Hello ${port}`))