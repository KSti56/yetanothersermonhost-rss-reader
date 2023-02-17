/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file sermons.js
 * @description API v1 sermons route
 * @author ThisLightMan
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

const getAllSermons = require('../../../../lib/getAllSermons')

// Routers
router.use('/latest', require('./latest'))

// Routes
router.get('/', (req, res) => {
    getAllSermons()
        .then(sermons => {
            res.status(200).json(sermons)
        })
        .catch(error => {
            res.status(500).json({ error })
        })
})

module.exports = router
