let display = document.querySelector('input')
const button = document.querySelector('#btn')
let uls = document.querySelector('ul')

display.onkeyup = (env) => {
  if (env.keyCode == 13) {
    if (display.value.trim().length != 0 ) {
      let li = document.createElement('li')
      let button = document.createElement('button')
      button.textContent = 'X'
      li.innerHTML = display.value
      li.append(button)
      button.onclick = () => {
        li.remove()
      }
      display.value = ''
      uls.prepend(li)
    }else{
      display.value = ''
    }
  }
}

button.addEventListener('click', () => {
  if (display.value.trim().length != 0 ) {
    let li = document.createElement('li')
    let p = document.createElement('p')
    let button = document.createElement('button')
    let edit = document.createElement('button')
    edit.textContent = 'Edit'
    button.textContent = 'X'
    p.innerHTML = display.value
    li.append(p)
    li.append(edit)
    li.append(button)
    button.onclick = () => {
      li.remove()
    }
    let contentData = p.innerHTML
    edit.onclick = () => {
      if (p.getAttribute('contentEditable') === null) {
        edit.innerHTML = 'Save'
        p.setAttribute('contentEditable', true)
      } else if (p.getAttribute('contentEditable', true)) {
        if (p.innerHTML.length != 0) {
          edit.innerHTML = 'Edit'
		  contentData = p.innerHTML
          p.removeAttribute('contentEditable')
        } else {
          edit.innerHTML = 'Edit'
          p.removeAttribute('contentEditable')
          p.innerHTML = contentData
        }
      }
    }
    display.value = ''
    uls.prepend(li)
  }else{
    display.value = ''
  }
})