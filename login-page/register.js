const rl = require('readline')
let readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})
const fs = require('fs')
const path = require('path')
const { parse } = require('path/posix')

let arr = ['ism : ', 'familya : ', 'yosh : ', 'gender : '], count = 0, datas = {}

function setPromts(data) {
    readline.setPrompt(data)
    readline.prompt()
}
setPromts(arr[count])

readline.on('line', (data) => {
    datas[arr[count]] = data
    if (count == arr.length - 1) {
        let users = fs.readFileSync(path.join(__dirname, 'dataOfUsers.json'), 'utf-8')
        users = JSON.parse(users)
        datas['id'] = new Date().getTime()
        users.push(datas)
        fs.writeFileSync(path.join(__dirname, 'dataOfUsers.json'), JSON.stringify(users, null, 4))
        console.log('you are registered succesfully');
        readline.close()
    }
    else setPromts(arr[++count])
})







