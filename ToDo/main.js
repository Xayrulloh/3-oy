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
		let button = document.createElement('button')
		// let change = document.createElement('button')
		// change.textContent = 'Change'
		button.textContent = 'X'
		li.innerHTML = display.value
		// li.append(change)
		li.append(button)
		button.onclick = () => {
			li.remove()
		}
		// change.onclick = () => {
			
		// }
		display.value = ''
		uls.prepend(li)
	}else{
		display.value = ''
	}
})


















