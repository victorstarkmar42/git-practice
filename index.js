require('dotenv').config()
const express = require('express')
const app = express()
const {
    PORT = 2000
}
process.env

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Example app listening at http: //localhost:${PORT}`)
})