/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file index.js
 * @description The main file for the YetAnotherSermonHost-RSS-Reader
 * @author ThisLightMan
 * @version 1.0.0
 */

// Dependencies
const express = require('express')
const cors = require('cors')
const config = require('../config.json')


// Initialize Express
const app = express()

// CORS Setup
app.use(cors())

// Routes
app.use('/', require('./routes/main'))

// 404
app.use((req, res) => {
    res.status(404).send('404 Not Found')
})


// Start Server
app.listen(config.express.port, config.express.ip, () => {
    log(`Server started at ${config.express.ip}:${config.express.port}`)
})
