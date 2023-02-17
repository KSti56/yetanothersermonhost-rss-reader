/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file getLatestSermon.js
 * @description Gets the latest sermon from the RSS feed.
 * @author ThisLightMan
 * @version 1.0.0
 */

const getAllSermons = require('./getAllSermons')

module.exports = async () => {
    return new Promise((resolve, reject) => {
        getAllSermons().then((data) => {
            resolve(data[0])
        }).catch((err) => {
            reject(err)
        })
    })
}
