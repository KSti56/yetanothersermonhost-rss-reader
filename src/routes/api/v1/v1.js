/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file v1.js
 * @description API v1 routes
 * @author ThisLightMan
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

// Routers
router.use('/sermons', require('./sermons/sermons'))

module.exports = router
