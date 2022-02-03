function upper(str, time) {
    return new Promise((res, rej) => {
        if (typeof str == 'string') {setTimeout( () => {res(str.toUpperCase())}, time)}
        else rej(new Error('invalid input').message)
    })
}

let promise = upper('no', 2000)
promise
    .then((word) => console.log(word))
    .catch((error) => console.log(error))



