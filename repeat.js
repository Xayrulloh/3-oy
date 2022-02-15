// console.clear()
// console.log('This is \n program');

// let x=1, y=2,
// z=
// x+y;
// console.log(x, y, z);

// Netscape is the software company that developed JavaScript.

// console.log(parseInt ("4F", 16));

// console.log(3 + 2 ++'5');

// console.log(+null+ + - + +'4');

// let name = 'Xayrulloh'

// function getName() {
//     console.log(name);
//     name = 'Sayfulloh'
// }
// getName()

// let number = 25

// var main = function() {
//     console.log(number);
//     number = 40
// }
// main()

// function addToList(item, list) {
//     return list.push(item)
// }

// const res = addToList('apple', ['banana'])
// console.log(res);

// let num = 10

// const increaseNumber = () => num++
// const increasePassedNumber = number => number++

// const num1 = increaseNumber()
// const num2 = increasePassedNumber(num1)

// console.log(num1);
// console.log(num2);

// setInterval(() => console.log('hi'), 1000)

// console.log(`${(x => x)('I love')} to program`);

// console.log(Array.isArray({length : 5}));

// console.log(6 * '2');

// if (102 | 1) {
//     console.log('yeah');
// }

// if (102 & 1) {
//     console.log('yeah');
// }

// function a () {
//     let c = b = 33
// }
// a()
// console.log(b);
// console.log(global);

// "use strict"
// eval('var x = 1;')
// console.log(x);

// let apt = 2
// apt = apt << 4
// console.log(apt);

// function compareMembers(person1, person2 = person) {
//     console.log(person1, person2);
//     if (person1 !== person2) {
//         console.log('not the same');
//     } else {
//         console.log('they are same');
//     }
// }

// let person = {name : 'Xayrulloh'}
// compareMembers(person)

// var Obj = function() {
//     this.name = 'Alex'; var that = {}
//     that.name = 'David';
//     this.name = this.name + ' && ' + that.name
//     console.log(name);
//     return name
// }
// console.log(new Obj());
// var o = new Obj()
// console.log(o.name);

// console.log(false && 1 && []);
// console.log(' ' && true && 5);

// const someFunc = () => arguments
// console.log(someFunc());

// function someFunc() {
//     return arguments
// }
// console.log(someFunc());

// console.log([] - [])

// exericise 1
/*function uncersor(str, words) {
    let [count, res] = [0, '']
    for (let a = 0; a < str.length; a++) {
        if (str[a] == '*') {
            res += words[count]
            count++
        } else res += str[a]
    }
    return res
}
console.log(uncersor( "Wh*r* d*d my v*w*ls g*?", "eeioeo"));*/

// exercise 2
/*function plusOne(arr) {
    let num = +arr.join('') + 1, res = []
    num = num.toString().split('')
    for (const a of num) {
        res.push(+a)
    }
    return res
}
console.log(plusOne([1, 2, 9]));*/

// exercise 3
/*class Library {
    constructor(library, name, author){
        this.library = library
        this.name = name
        this.author = author
    }

    getName(str) {
        console.log(`{${str} : ${this.name}}`);
    }
}
class Book extends Library {}

let book = new Book('Milliy', 'sariq devni minib', 'Xudoyberdi T')
console.log(book.library);
console.log(book.name);
console.log(book.author);
console.log(book);
book.getName('Title')*/

// exercise 4
/*function oddOrEven(arr, len = 0, sum = arr[0]) {if (len == arr.length - 1) return sum % 2 ? 'Toq' : 'Juft'; return oddOrEven(arr, len += 1, sum += arr[len])}
console.log(oddOrEven([-1, 5, 8, -4]));*/

// exercise 5
/*Array.prototype.customSort = function(callback){
    for(let i = 0; i < this.length; i++){
        for(let j = i + 1; j < this.length; j++){
            if(callback(this[i], this[j])){
                let temp = this[i];
                this[i] = this[j];
                this[j] = temp;
            }
        }
    }
    return this;
}
let array = [1,2,3,4,5,6,7,8,9]
console.log(array.customSort((a, b) => a - b))*/




// let arr = [0, 0, 0]
// arr.unshift(1)
// console.log(arr);

// const main = () => base({x: 20, y: 30})
// const base = ({x: y}) => {
//     return x
// }
// console.log(main());

// let longfunc = arr => arr => arr => arr * arr
// console.log(longfunc(5));

// let x = 10;
// ((n) => console.log(n * n))(x)

// class Base {
//     constructor(arg) {
//         this.#value = arg
//     }
//     get getPrivate() {
//         return this.#value
//     }
// }

// function foo (Baz) {
//     let ins = new Baz(10)
//     return ins.getPrivate
// }
// console.log(foo(Base));

// const base = () => {
//     return new Promise()
// }
// ;(() => {
//     let data = await base()
//     console.log(data);
// })

// let arr = [2, 6, 8, 9]
// let reduced = arr.reduce((acc, el, i, arr) => {
//     return acc + arr[arr.length - i - 1]
// }, 0)
// console.log(reduced);

// console.log(undefined + 56);

// console.log(new []);

// const fn = (val) => +val
// console.log(typeof fn('A' > 'B'));

// const func = () => n
// console.log(func());

// const {log} = console
// console.log(typeof log);

// class Main {
//     #sayHello () {
//         return 'Hello'
//     }
// }
// let main = new Main
// console.log(main.#sayHello);

// var let = 25
// console.log(let);

// function main(callback) {
//     return callback((n) => n)
// }
// let res = main((innerCallback) => innerCallback())
// console.log(res);

// console.log(plus(10, 20));
// var plus = function (a, b) {
//     return a + b
// }

// let x = () => 10
// x = () => 20
// x = () => 30
// console.log(x());

// function main() {
//     return 1
//     return 'hello'
//     return () => {}
// }
// console.log(main());

// const human = {
//     data: ['A', 20]
// }
// const {data: [,,age]} = human
// console.log(age);

// class ParentMath {
//     static plus(a, b) {
//         return a + b
//     }
// }
// class ChildMath extends ParentMath {}
// let math = new ChildMath()
// console.log(math.plus(5, 5));

// 'use strict'
// x = 50
// console.log(x);

// const res = (n) => {
//     if(n >= 5) return 
//     else return res(++n)
//     console.log(n);
// }
// res(1)

// const main = () => {
//     const x = 10
//     x = 50
//     return x
// }
// console.log(main);










