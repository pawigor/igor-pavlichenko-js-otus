#!env node
let requestId = 0
require('http').createServer((req, res) => {
  res.write('Hello, world #' + ++requestId)
  setTimeout(function () {
    res.end('! ')
    console.log(new Date().toUTCString(), ': responded #' + requestId)
  }, 100)
}).listen(8080)
