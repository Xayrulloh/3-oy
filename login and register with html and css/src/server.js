const fs = require('fs')
const path = require('path')
const http = require('http')
const Express = require('./lib/express.js')
const {PORT, host} = require('./config.js')
const server = http.createServer((req, res) => {
    const app = new Express(req, res)
    app.get('/api/users', (req, res) => {
        res.setHeader('Acces-Control-Allow-Origin', '*')
        res.writeHead(200, {'Content-Type': 'application/json'})
        let datas = fs.readFileSync(path.join(__dirname, 'database', 'data.json'), 'utf-8')
        let data = JSON.parse(datas).filter(el => el.gender == 1 ? el.gender = 'erkak' : el.gender = 'ayol')
        res.write(JSON.stringify(data))
        return res.end()
    })
    app.post('/api/users', (req, res) => {
        let data = ''
        res.on('data', arg => data += arg)
        res.on('end', () => {
            data = JSON.parse(data)
            let datas = fs.readFileSync(path.join(__dirname, 'database', 'data.json'), 'utf-8')
            datas = JSON.parse(datas) 
            datas.push(data)
            fs.writeFileSync(path.join(__dirname, 'database', 'data.json'), JSON.stringify(users, null, 4))
            return res.end('you are registered')
        })
    })
})

server.listen(PORT, () => {
    console.log(`http://${host}:${PORT}`);
})


