/**
 * @name YetAnotherSermonHost-RSS-Reader
 * @file formatText.js
 * @description Formats the text with the data from the sermon
 * @author ThisLightMan
 * @version 1.0.0
 */

module.exports = (text, data) => {
    const { title, link, published, date, series, preacher } = data
    return text
        .replace(/{title}/g, title || 'Unknown')
        .replace(/{link}/g, link || 'Unknown')
        .replace(/{published}/g, published || 'Unknown')
        .replace(/{date}/g, date || 'Unknown')
        .replace(/{series}/g, series || 'Unknown')
        .replace(/{preacher}/g, preacher || 'Unknown')
}
