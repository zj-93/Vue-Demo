const Http = require('http')
const Route = require('./route.js')

const port = 3000


const httpStart = () => {

  // 创建 HTTP 服务
  const server = Http.createServer((request, response) => {
      Route.apiServer(request, response) // 普通HTTP服务
  }).listen(port, () => {
      console.log(`server is running on http://localhost:${port}`)
  })

  return server

}

exports.start = httpStart