/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file main.js
 * @description Main router for the application
 * @author ThisLightMan
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

// Routers
router.use('/api', require('./api/api'))
router.use('/latest-sermon', require('./latest-sermon'))

module.exports = router
