// 01.10) exersice 1
/*class Animals {
    constructor(names, eyes, tails, voice) {
        this.name = names
        this.eye = eyes
        this.tail = tails
        this.v = voice
    }
    voice(simple) {this.v = simple; console.log(`${this.v} my name is ${this.name}`);}
}
let lion = new Animals('lion', 2, true, 'roar'), cat = new Animals('toby', 2, true, 'miyav')
lion.voice('Lion'); cat.voice('Cat')*/

// 01.10) exersice 2
/*class Person {
    #firstName
    #lastName
    #age
    #gender
    constructor(firstName, lastName, age,gender){
      this.#firstName = firstName
      this.#lastName = lastName
      this.#age = age;
      this.#gender = gender;
    }
    #validate(){
      return typeof str=="string" && str.length>3 ?str : undefined;
    }
  
    get getFullName(){
      return this.#firstName + " " + this.#lastName
    }
    set setFullName(arr){
      this.#firstName = this.#validate(arr[0]) ? arr[0] : this.#firstName
      this.#firstName = this.#validate(arr[0]) ? arr[0] : this.#lastName
    }
    get getGender () {
      return this.#gender == 1? "Erkak": "Ayol"
    }
}
const person1 = new Person('robert', 'robert', 20, 1);
const person2 = new Person('toby', 'smith', 23, 0);
console.log(person2.getFullName)*/

// 01.10) exersice 3
/*class RGB {
    constructor (R, G, B) {
        R <= 255 ? this.Red = R : this.Red = 0
        G <= 255 ? this.Green = G : this.Green = 0
        B <= 255 ? this.Blue = B : this.Blue = 0
    }
    get getcolors () {return `R: ${this.Red}, G: ${this.Green}, B: ${this.Blue}`}
    set setcolors(arr) {
        if (arr[0] <= 255 && arr[0]) this.Red = arr[0]
        if (arr[1] <= 255 && arr[1]) this.Green = arr[1]
        if (arr[2] <= 255 && arr[2]) this.Blue = arr[2]
    }
    red(r) {r <= 255 ? this.Red = r : this.Red}
    green(g) {g <= 255 ? this.Green = g : this.Green}
    blue(b) {b <= 255 ? this.Blue = b : this.Blue}

}
let color = new RGB(300, 15, 50)
color.setcolors = [255, 255, 300]
color.red(15)
color.green(30)
color.blue(45)
console.log(color.getcolors);*/

// 01.11) exersice 1
/*const fs = require('fs')
const path = require('path')
fs.readFile('3-oy/test.txt', (err, data) => {
  if (err) {
    console.log(err);
  }else{
    console.log(data.toString());
  }
})*/

// 01.11) exersice 2
/*const http = require('http')
const PORT = 4000
const server = http.createServer((req, res) => {
  if (req.url == '/' && req.method == 'GET') res.end('you are in wrong way')
})
server.listen(PORT, () => {console.log(`server http://localhost:${PORT}`)})*/

// 01.11) exersice 3
/*const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 4000

const server = http.createServer((req, res) => {
  if (req.url == '/' && req.method == 'GET') {
    res.setHeader('Content-Type', 'text/html')
    fs.readFile(path.join(__dirname, 'views', 'index.html'), (err, data) => {
      if(err) {console.log(err); res.end()}
      else res.write(data)
    })
    res.end()
  }
  if (req.url == '/users' && req.method == 'GET') {
    res.setHeader('Content-Type', 'text/html')
    res.write(fs.readFileSync(path.join(__dirname, 'views', 'users.html')))
    res.end()
  }
})
server.listen(PORT, () => console.log(`server http://localhost:${PORT}`))*/

// 01.11) exersice 4
/*const http = require('http')
const fs = require('fs')
const path = require('path')
const PORT = 4000 
const server = http.createServer((req, res) => {
  const createPath = page => path.resolve(__dirname, 'views', `${page}.html`)
  let basePath = ''
  switch (req.url) {
    case '/':
      basePath = createPath('index')
    break
    case 'users':
      basePath = createPath('users')
    break
    default:
      basePath = createPath('error')
  }
  res.setHeader('Content-Type', 'text/html')
  fs.readFile(basePath, (err, data) => {
    if (err) {
      console.log(err);
      res.end()
    }else{
      res.write(data)
      res.end()
    }
  })
}) 
server.listen(PORT, () => {
  console.log(`server http://localhost:${PORT}`);
})*/

// 01.11) exersice 5
/*const http = require('http')
const fs = require('fs')
const path = require('path')
const server = http.createServer((req, res) => {
  if (req.url == '/') {
    res.setHeader('Content-type', 'text/html')
    res.write(fs.readFileSync(path.join(__dirname, 'views', 'index.html')))
  }
  if (req.url == '/style.css') {
    res.setHeader('Content-type', 'text/css')
    res.write(fs.readFileSync(path.join(__dirname, 'views', 'style.css')))
  }
  if (req.url == '/rasm') {res.setHeader('Content-type', 'image/jpg'); res.write(fs.readFileSync(path.join(__dirname, 'views', 'rasm.jpg')))}
  res.end()
})
server.listen(4000, () => {
  console.log(`server http://localhost:4000`);
})*/

// 01.11) exersice 6
/*const rl = require('readline')
let readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})
let ism, familya, yosh = ''
readline.question('ismingni et qarol? ', (data) => {
  ism = data
  readline.question('familyeni et betofiq ovsar? ', (data) => {
    familya = data
    readline.question('yoshin necida gaday? ', (data) => {
      yosh = data
      console.log(`ismi: ${ism}, familyasi: ${familya}, yoshi: ${yosh}`);
      readline.close()
    })
  })
})*/

// 01.11) exersice 7
/*const rl = require('readline')
const fs = require('fs')
const path = require('path')
const { json } = require('stream/consumers')
let readline = rl.createInterface({
  input: process.stdin,
  output: process.stdout
})
let arr = ['ism', 'familya', 'yosh', 'gender'], a = 0, datas = {}
function setPromts(data) {
  readline.setPrompt(data + ': ')
  readline.prompt()
}
setPromts(arr[a])
readline.on('line', (data) => {
  datas[arr[a]] = data
  if (a == arr.length - 1) {
    let users = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf-8')
    users = JSON.parse(users)
    datas['userId'] = new Date().getTime()
    users.push(datas)
    fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(users, null, 4))
    console.log('you are registered');
    readline.close()
  }
  else {setPromts(arr[++a])}
})*/











