const fs = require('fs')
const path = require('path')
const rl = require('readline')
const readline = rl.createInterface({
    input: process.stdin,
    output: process.stdout
})
let toCheck = ['ismingiz : ', 'familyangiz : '], count = 0, checkCount = 0

function sorash(data) {
    readline.setPrompt(data)
    readline.prompt()
}
sorash(toCheck[count])

readline.on('line', (data) => {
    let datas = fs.readFileSync(path.join(__dirname, 'dataOfUsers.json'), 'utf-8')
    datas.includes(data) ? checkCount++ : checkCount
    if (count == toCheck.length - 1) {
        checkCount === 2 ? console.log('Welcome back to sir') : console.log('What are you doing here bitch');
        readline.close()
    }
    else sorash(toCheck[++count])
})






