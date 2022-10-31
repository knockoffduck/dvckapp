const express = require('express')
const tool = require('./puppeteer.js')
const app = express()
const port = process.env.PORT || 5050


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/test', (req, res) => {
    tool.scrapeImages().then(response => { res.send(response) })
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})