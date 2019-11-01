let http = require('http')
let url = require('url')

function start(route, handle) {
  function onRequest(request, response) {
    let pathName = url.parse(request.url).pathname
    route(handle, pathName, response)
  }
  http.createServer(onRequest).listen(8888)
}

exports.start = start