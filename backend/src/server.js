const http = require('http')
const Express = require('./lib/express.js')
const fs = require('fs')
const path = require('path')
const {PORT, host} = require('./config.js')
const server = http.createServer((req, res) => {
    const app = new Express(req, res)
    app.get('/api/users', (req, res) => {
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.write(fs.readFileSync(path.join(__dirname, 'database', 'data.json')))
        return res.end()
    })
})

server.listen(PORT, () => {
    console.log(`http://${host}:${PORT}`);
})