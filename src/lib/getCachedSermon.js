/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file getCachedSermon.js
 * @description Gets the latest cached sermon from the cacheSermon worker.
 * @author ThisLightMan
 * @version 1.0.0
 */
const getLatestSermon = require('./getLatestSermon')

module.exports = async () => {
    const { latestSermon } = require('../workers/cacheSermon')
    if (latestSermon) return latestSermon
    else return await getLatestSermon()
}
