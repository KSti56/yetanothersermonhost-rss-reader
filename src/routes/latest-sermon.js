/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file latest-sermon.js
 * @description Route for latest sermon
 * @author ThisLightMan
 * @version 1.0.0
 */

const express = require('express')
const router = express.Router()
const config = require('../../config.json')
const getCachedSermon = require('../lib/getCachedSermon')
const formatText = require('../lib/formatText')

// Routes
router.get('/text/:id', (req, res) => {
    getCachedSermon()
        .then((data) => {
            const { id } = req.params
            const text = config['text-presets'][id]

            if (!text) return res.status(404).send('404 Not Found')

            const formattedText = formatText(text, data)
            res.status(200).send(formattedText)
        })
        .catch((err) => {
            res.send(err)
        })
})

module.exports = router
