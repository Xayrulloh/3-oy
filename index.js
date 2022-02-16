// exercise 1
/*class Pagination {
    constructor (array, options) {
        this.number = options.limit
        this.orginal = array
        this.options = options
        this.array = []
        let res = []
        let limit = options.limit
        for (let a = 0; a < array.length; a++) {
            res.push(array[a])
            if (a == limit - 1) {this.array.push(res); res = []; limit += options.limit; }
        }
        if (res.length) this.array.push(res)
    }
    
    get pages() {
        return this.array.length
    }

    set setLimit(num) {
        this.number = num
        this.array = []
        let res = []
        let limit = num
        for (let a = 0; a < this.orginal.length; a++) {
            res.push(this.orginal[a])
            if (a == limit - 1) {this.array.push(res); res = []; limit += num; }
        }
        if (res.length) this.array.push(res)
    }

    getPage(num) {
        return num == 0 ? this.array[num] : this.array[num - 1]
    }

    filter(callback) {
        this.array = []
        this.array = this.orginal.filter(callback)
        let result = []
        let res = []
        let limit = this.number
        for (let a = 0; a < this.array.length; a++) {
            res.push(this.array[a])
            if (a == limit - 1) {result.push(res); res = []; limit += this.number;}
        }
        if (res.length) result.push(res)
        this.array = result
    }

}

let pagination = new Pagination(['A', 'B', 'C', 'D', 'E', 'C', 'B', 'A', 'B', 'E'], { limit: 3 })

console.log(pagination.pages)     // 4
console.log(pagination.getPage(2))     // ['D', 'E', 'C']
console.log(pagination.getPage(4))     // ['E']

pagination.setLimit = 2
console.log(pagination.pages)      // 5
console.log(pagination.getPage(1))      // ['A', 'B']

pagination.filter( (el, i, arr) => el !== 'B' )
console.log(pagination.pages)      // 4
console.log(pagination.getPage(1))      // ['A', 'C']
console.log(pagination.getPage(2))      // ['D', 'E']*/

// exercise 2
/*function devide(arr, num) {
    let [res, len, sum] = [[], [], 0]
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]
        if (sum > num) {
            res.push(len)
            len = []
            sum = 0
            i--
        }else{
            len.push(arr[i])
        }
    }
    res.push(len)
    return res
}
console.log(devide([2, 1, 0, -1, 0, 0, 2, 1, 3], 3));*/

// exercise 3
/*function join(arr) {
    let str = arr[0] + '', len = str.length - 1, big = 0

    for (let a = 1; a < arr.length; a++) {
        if (arr[a].toString().includes(str[str.length - 1])) {
            let index = arr[a].toString().indexOf(str[str.length - 1]), count = index + 1, lencopy = len, check = true, indexcopy = index

            for (; indexcopy >= 0; indexcopy--, lencopy--) if (arr[a].toString()[indexcopy] != str[lencopy]) check = false

            if (check) {
                if (a == 1) big = count
                
                str += arr[a].toString().slice(index + 1)
                len = str.length - 1
                if (count < big) big = count
            }
        } else str += arr[a].toString()
    }
    return [str, big]
}
console.log(join([['oven'], ['envier'], ['erase'], ['serious']]));
console.log(join([['move'], ['over'], ['very']]));
console.log(join([['to'], ['ops'], ['psy'], ['syllable']]));
console.log(join([['aaa'], ['bbb'], ['ccc'], ['ddd']]));*/

// exercise 4
/*function describe() {
    let info = `${this.name}, ${this.age} years old`
    return info
}

function Person(name, age) {
    this.name = name
    this.age = age
}
let patrick = new Person("Patrick", 20);
let john = new Person("John", 15);
console.log(describe.call(patrick));
console.log(describe.call(john));*/





// exercise 5
/*function group(arr, num) {
    let toq = [], juft = [], res = []
    for (const a of arr) {f
        if (a % 2) toq.push(a);
        else juft.push(a)
    }
    if (num == 1){
        for (let a of arr) res.push([a])
    }else {
        if(toq.length) {
            let number = num
            let count = []
            for (let a = 0; a < toq.length; a++) {
                count.push(toq[a])
                if (a == number - 1) {
                    number += num
                    res.push(count)
                    count = []
                }
            }
            if (count.length) res.push(count)
        }
        if(juft.length) {
            let number = num
            let count = []
            for (let a = 0; a < juft.length; a++) {
                count.push(juft[a])
                if (a == number - 1) {
                    number += num
                    res.push(count)
                    count = []
                }
            }
            if (count.length) res.push(count)
        }
        
    }
    return res
}
console.log(group([1, 2, 3, 4, 5, 7], 2));
console.log(group([1, 2, 3, 4, 5, 6, 7], 4));
console.log(group([1, 2, 3, 4, 5], 1));*/










