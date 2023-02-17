/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file getAllSermons.js
 * @description This file contains the function that gets all the sermons from the RSS feed.
 * @author ThisLightMan
 * @version 1.0.0
 */

const { extract } = require('@extractus/feed-extractor')
const config = require('../../config.json')
const parseSermonData = require('./parseSermonData')

module.exports = async () => {
    return new Promise((resolve, reject) => {
        extract(config['yetanothersermonhost-rss-feed'])
            .then((feed) => {
                if (feed?.entries?.length === 0) return reject(new Error('No sermons found in the RSS feed.'))

                const { entries } = feed
                const sermons = entries.map(parseSermonData)
                resolve(sermons)
            })
            .catch((err) => {
                reject(err)
            })
    })
}
