const express = require('express')
const app = express()

require('./config/database')


app.get('/api/hello', (req, res) => {
    res.send("hello")
})

app.listen(8000, () => {
    console.log("listening port 8000");
})