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

// 18.01) tests
// test 1  true
/*console.log((undefined == null) == (null >= 0));*/

// test 2  RangeError
/*function base (a = 10, b = base) {
  return a + base(10)
}
console.log(base(20));*/

// test 3  TypeError
/*const plus = (a, b) => a * b
console.log(plus(14n, 2));*/

// test 4  1, 2, 3, 4, 5
/*let i = 0
let id = setInterval(() => {
  console.log(++i);
  if (i >= 5) clearInterval(id)
}, 100)*/

// test 5  ReferenceError
/*let object = {
  n1: 25,
  n2: 10,
  n3: 30,
  n4: 5
}
Object.defineProperty(object, 'n3', {
  enumerable: false,
})
let sum = Object.keys().reduce(() => acc + object[el], '')
console.log(sum);*/

// test 6  SyntaxError
/*let i = 0
for() {
  if (i == 3) break
  console.log(i++);
}*/

// test 7  56
/*if (' ') {
  let x = 89
}
;(function (n) {
  this.x = n
})(56)
console.log(x);*/

// test 8  3, 0
/*let res = (b => b > (!b >= 1))(!true)
let funcs = [
  (n) => console.log(n * 2),
  (n) => console.log(n + 3),
]
switch(res) {
  default: funcs[+res](res)
  case false: funcs[res + 1](res)
  case true: funcs[res - 0](res)
}*/

// test 9  TypeError
/*const parent = () => {
  const x = 10
  return function() {
    x = 25
    return () => {
      let x = 10
      return x
    }
  }
}
console.log(parent()()());*/

// test 10  function
/*let func = (callback, n) => {
  return callback(() => n * n)
}
func((x) => {
  console.log(typeof x);
})*/

// test 11  name, undefined, name, undefined
/*function main({letter: A, word: B}, arr = []) {
  let object = {
    [A]: A,
    B: B
  }
  for (let key in object) {
    arr[arr.length] = object[A]
    arr[arr.length] = object[B]
  }
  return arr
}
console.log(main({letter: 'Name', word: 'Surname'}));*/

// test 12  false
/*String.prototype.hasA = function() {
  if ('a' in this) return true
  else return false
}
let str = 'olma'
console.log(str.hasA());*/

// test 13  [1, 25, 3], [1, 2, 3]
/*let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
let copiedArr1 = arr1
let copiedArr2 = [...arr2]
copiedArr1[1] = 25
copiedArr2[1] = 10
console.log(arr1, arr2);*/

// test 14  ReferenceError
/*let mapped = letters.map((el, i, arr) => {
  arr[arr.length - i - 1]
})
const letters = ['A', 'B', 'C', 'D']
console.log(mapped);*/

// test 15  ['|', '|', '|', '|', '|']
/*let result = Array.from('h|a|c|k|e|r').filter(function(x, y, z) {
  if (x == '|') return x + y
})
console.log(result);*/

// test 16  anor
/*global.meva = 'gilos'
const main = () => {
  this.meva = 'shoptoli'
}
function base() {
  this.meva = 'anor'
}
base()
main()
console.log(meva);*/

// test 17  Ali
/*let person = {
  firstName: 'Ali',
  lastName: 'Holiqov',
  getName (x) {
    return this.firstName
  }
}
console.log(person.getName());*/

// test 18 undefined
/*let person = {
  firstName: 'Ali',
  lastName: 'Holiqov',
  set getName (x) {
    this.lastName = x
    return this.firstName
  }
}
person.getName = 'Nosir'
console.log(person.getName);*/

// test 19  {surname: 'Hikmatov'}
/*let person = {}
Object.defineProperties(person, {
  name: {
    value: 'Halil',
    writable: true
  },
  surname: {
    value: 'Hikmatov',
    enumerable: true
  }
})
person.surname = 'Nosirov'
console.log(person);*/

// test 20  DCB
/*let letters = ['A', 'B', 'C', 'D']
let index = letters.some(el => el == 'C')
let newLetters = letters.slice(index).reverse().join('')
console.log(newLetters);*/

// test 21  ['A0', 'B1', 'C2', 'D3']
/*let letters = ['A', 'B', 'C', 'D']
let mapped = letters.map((...elements) => {
  return elements[0] + elements[1]
})
console.log(mapped);*/

// test 22  true
/*console.log(([5] - [2]) === 3);*/

// test 23  3, 11, 2
/*let array = [4, 5, 6]
let object = {x: 4, y: 5, z: 6}
let string = 'hello world'
delete array[2]
delete string[2]
delete object['z']
console.log(array.length, string.length, Object.keys(object).length);*/

// test 24  55
/*function main(call, n) {
  return call ((x) => x * (n + 1))
}
let result = main((hello) => hello(5), 10)
console.log(result);*/

// test 25  SyntaxError
/*let meva = 'olma'
if (true) {
  var meva = 'gilos'
}
console.log(meva);*/

// test 26  TypeError
/*let obj = {}
Object.defineProperty(obj, 'x', {
  value: 10,
  enumerable: true,
})
Object.defineProperty(obj, 'x', {
  value: 15,
  enumerable: false,
})
console.log(obj);*/

// test 27  [8, 9]
/*let data = 'olma' && true || null
let anotherData = data && [8, 9] || 3
console.log(anotherData);*/

// test 28  
/*let nums = [7, 8, 9, 10]
let sum = nums.reverse().splice(true).reduce((x, y, z, w) => {
  return x * nums[nums.length - 1]
})
console.log(630 * 10);*/

// test 29  20 20
/*let x = null ?? 20
let y = null || 20
console.log(x, y);*/

// test 30  
/*console.log(+null >= !!' ');*/

// 18.01) homework 1 
/*function wordPattern(pattern, word) {
  pattern = pattern.split('')
  word = word.split(' ')
  if (pattern.length !== word.length) return false
  let obj = {}
  for (let a = 0; a < pattern.length; a++) {
    if (obj[pattern[a]]) {
      if (obj[pattern[a]] !== word[a]) return false
    }else{
      if (Object.values(obj).includes(word[a])) return false
      obj[pattern[a]] = word[a]
    }
  }
  return true
}
console.log(wordPattern('abba', 'dog dog dog dog'));*/


// 18.01) homework 2
/*function replacer(str, rep) {
  let res = ''
  let b = 0
  for (let a = 0; a < str.length; a++) {
    if (str[a] === '*') {
      res += rep[b]
      b++
    }else{
      res += str[a]
    }
  }
  return res
}
console.log(replacer('H*kim se* qa*yerda*an', 'anys'));*/

// 18.01) homework 3
/*function leftRotations(str) {
  let res = []
  for (let a = 0; a < str.length; a++) {
    let strcha = ''
    for (let b = a; b < str.length; b++) {
      strcha += str[b]
    }
    for (let c = 0; c < a; c++) {
      strcha += str[c]
    }
    res[res.length] = strcha
  }
  return res
}
console.log(leftRotations('asd'));*/

// 18.01) homework 4
// solution 1
/*function smallestTransform(num) {let middle = 0, countOfNumbers = 0, res = 0, closer = 0; num += ''; for (let a = 0; a < num.length; a++) middle += +num[a]; countOfNumbers = num.length; middle = middle / countOfNumbers | 0; if (!num.includes(middle)) {let arr = []; for (let a = 0; a < num.length; a++) arr.push(Math.abs(middle - num[a])); if (num.includes(middle + Math.min(...arr))) closer = middle + Math.min(...arr); else closer = middle - Math.min(...arr);} else closer = middle; for (let a = 0; a < num.length; a++) { if (num[a] != closer) {if (+num[a] < closer) res += closer - (+num[a]); else res += Math.abs(closer - (+num[a]));}}; return res}
console.log(smallestTransform(399));*/

// solution 2
/*function smallestTransform(num) {
  let middle = 0, countOfNumbers = 0, res = 0, closer = 0
  num += ''
  for (let a = 0; a < num.length; a++) middle += +num[a]
  countOfNumbers = num.length
  middle = middle / countOfNumbers | 0  // ortachasini ovoldim
  if (!num.includes(middle)) {  // owa ortacasi sonlani ichida bomi dib tekwirdim bomasa unga yaqini topiw uchun
    let arr = []
    for (let a = 0; a < num.length; a++) {
      arr.push(Math.abs(middle - num[a]))
    }
    if (num.includes(middle + Math.min(...arr))) closer = middle + Math.min(...arr)
    else closer = middle - Math.min(...arr)  // en yaqnini topdim
  }else{
    closer = middle
  }
  for (let a = 0; a < num.length; a++) {  // topgan sonimga teng bomaganlarini raznitsasini hisoblab cqardm
    if (num[a] != closer) {
      if (+num[a] < closer) res += closer - (+num[a])
      else res += Math.abs(closer - (+num[a]))
    }
  }
  return res
}
console.log(smallestTransform(1234));*/
// 18.01) homework 5
/*function mapLetters(str) {
  let res = {}
  for (let a = 0; a < str.length; a++) {
    res[str[a]] ? res[str[a]].push(a) : res[str[a]] = [a]
  }
  return res
}
console.log(mapLetters('olma'));
console.log(mapLetters('froggy'));
console.log(mapLetters('dodo'));*/
































