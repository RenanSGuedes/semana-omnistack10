const express = require('express')
const app = express()
const url = new URL('https://localhost:8080')
const routes = require('./routes')
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(url.port, () => {
  console.log(`Server running in ${url.href}`)
})
