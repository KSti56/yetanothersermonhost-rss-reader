/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file latest.js
 * @description API v1 latest sermon route
 * @author ThisLightMan
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()

const getCachedSermon = require('../../../../lib/getCachedSermon')
const getLatestSermon = require('../../../../lib/getLatestSermon')

// Routes
router.get('/', (req, res) => {
    getLatestSermon()
        .then(sermon => {
            res.status(200).json(sermon)
        })
        .catch(error => {
            res.status(500).json({ error })
        })
})

router.get('/cached', (req, res) => {
    getCachedSermon()
        .then(sermon => {
            res.status(200).json(sermon)
        })
        .catch(error => {
            res.status(500).json({ error })
        })
})

router.get('/redirect', (req, res) => {
    getCachedSermon()
        .then(sermon => {
            res.redirect(sermon.link)
        })
        .catch(error => {
            res.status(500).json({ error })
        })
})

module.exports = router
