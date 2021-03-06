/**
 *  参数处理
 */

const url = require('url')
const querystring = require('querystring')

module.exports = {
    grabPostParams: (request) => {
        return new Promise((resolve) => {
            let postData = ''
            request.on('data', (data) => {
                postData += data
            })
            request.on('end', () => {
                if (postData.indexOf('{') === 0) {
                    postData = JSON.parse(postData)
                } else {
                    postData = querystring.parse(postData)
                }
                resolve(postData)
            })
        })
    },
    grabGetParams: (request) => {
        return url.parse(request.url, true).query || {}
    }
}