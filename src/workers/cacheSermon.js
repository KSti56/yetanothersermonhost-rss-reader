/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file cacheSermon.js
 * @description Caches the latest sermon.
 * @author ThisLightMan
 * @version 1.0.0
 */

const getLatestSermon = require('../lib/getLatestSermon')
const log = require('../utils/log')

const update = async () => {
    log('Updating latest sermon cache...', 'info')
    getLatestSermon()
        .then((sermon) => {
            module.exports.latestSermon = sermon
            log('Updated latest sermon cache.', 'info')
        })
        .catch((err) => {
            log('Failed to get latest sermon: ' + err, 'error')
        })
}

const start = () => {
    update()
    setInterval(update, 1000 * 60 * 5)
}

module.exports = {
    update,
    start
}
