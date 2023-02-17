/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file api.js
 * @description API Router
 * @author ThisLightMan
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

// Routers
router.use('/v1', require('./v1/v1'))

module.exports = router
