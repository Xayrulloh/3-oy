btn.onclick = async (env) => {
    let res = await fetch('http://localhost:4000/api/users', {
        method: 'POST',
        body: JSON.stringify({username: exampleInputEmail1.value,
                   password: exampleInputPassword1.value, 
                   contact: contactId.value,
                   age: ageId.value,
                   gender: genderId.value
                })
    })
    res = await res.json()
}





