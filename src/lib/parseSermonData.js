/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file parseSermonData.js
 * @description Parses the sermon data from the RSS feed.
 * @author ThisLightMan
 * @version 1.0.0
 */

module.exports = sermon => {
    const { title, link, published, description } = sermon
    const match = description.match(/Series:(?<series>.+)Preacher:(?<preacher>.+)Date:(?<date>.+)/)
    const { series, preacher } = match.groups

    const date = new Date(published).toLocaleDateString()

    return {
        title,
        link,
        published,
        date,
        series: series.trim(),
        preacher: preacher.trim()
    }
}
