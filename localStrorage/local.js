let inputs = document.querySelectorAll('input')
let button = document.querySelector('button')

button.onclick = () => {
    let users = window.localStorage.getItem('users') 
    users = users ? JSON.parse(users) : []

    let newUser = {
        username: inputs[0].value,
        age: inputs[1].value
    }

    users.push(newUser)

    window.localStorage.setItem('users', JSON.stringify(users))

    inputs[0].value = null
    inputs[1].value = null
}

