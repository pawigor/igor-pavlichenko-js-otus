#!env node

const http = require('http')
const {promisify} = require('util')
const url = 'http://127.0.0.1:8080'

const argv = process.argv
if (!argv[2] || !argv[3]) {
  process.stderr.write('Usage: $ request.js [s|p] N\n')
  process.stderr.write('\t\t[s|p] \t [s]equentially or in [p]arallel run\n')
  process.stderr.write('\t\tN \t count of requests\n')
  process.exit(1)
}

http.get[promisify.custom] = options => new Promise((resolve, reject) => {
  http.get(options, (response) => {
    response.end = new Promise((resolve) => response.on('end', resolve))
    resolve(response)
  }).on('error', reject)
})

const promisifyGet = promisify(http.get)

const type = argv[2]
const count = parseInt(argv[3])

const parallel = () => {
  for (let i = 0; i < count; i++) {
    http.get(url, (res) => {
      let data = ''
      res.on('data', (chunk) => {
        data += chunk
      })
      res.on('end', () => {
        console.log(new Date().toUTCString(), 'Got response in parallel: ', data)
      })
    })
  }
}

const sequentially = () => (async () => {
  for (let i = 0; i < count; i++) {
    try {
      const response = await promisifyGet(url)
      let data = ''
      response.on('data', (chunk) => data += chunk)
      await response.end
      console.log(new Date().toUTCString(), 'Got response sequentially: ', data)
    } catch (e) {
      console.error(e)
    }
  }
})()

if (type === 'p') // in parallel
  parallel()

if (type === 's') // sequentially
  sequentially().then(() => {console.log('Done.')})