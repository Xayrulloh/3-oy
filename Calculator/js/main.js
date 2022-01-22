let nums = document.querySelectorAll('.num')
let signs = document.querySelectorAll('.sign')
let display = document.querySelector('input')
let equal = document.querySelector('.equal')
let clearButton = document.querySelectorAll('.remove-element')[0]
let removeButton = document.querySelectorAll('.remove-element')[1]
let dot = document.querySelector('.dot')

class Calculator {
	zero (display) {
		if (display.value[0] == '0' && display.value[1] != '.') {
			display.value = ''
		}
	}

	concatSigns(char, display) {
		if (!display.value.includes('✕') && !display.value.includes('÷') && !display.value.includes('+') && !display.value.includes('-')) display.value = display.value + char
		if ('✕÷+-'.includes(display.value[display.value.length - 1])) display.value = display.value.slice(0, display.value.length - 1) + char
		if ((display.value.includes('✕') || display.value.includes('÷') || display.value.includes('+') || display.value.includes('-')) && !'✕÷+-'.includes(display.value[display.value.length - 1])) {
			this.calculate(display)
			display.value = display.value + char
		}
	}

	concatNums (char, display) {
		display.value = display.value + char
	}

	concatDot (char, display) {
		if (display.value != '') {
			if (display.value.includes('✕')) {
				if (!display.value.split('✕')[1].includes(char) && !'✕÷+-'.includes(display.value[display.value.length - 1])) {
					display.value += char
				}
			}
			else if (display.value.includes('÷')) {
				if (!display.value.split('÷')[1].includes(char) && !'✕÷+-'.includes(display.value[display.value.length - 1])) {
					display.value += char
				}
			}
			else if (display.value.includes('+')) {
				if (!display.value.split('+')[1].includes(char) && !'✕÷+-'.includes(display.value[display.value.length - 1])) {
					display.value += char
				}
			}
			else if (display.value.includes('-')) {
				if (!display.value.split('-')[1].includes(char) && !'✕÷+-'.includes(display.value[display.value.length - 1])) {
					display.value += char
				}
			}
			else {
				if (!display.value.includes(char)) {
					display.value += char
				}
			}
		}
	}

	clearDisplay (display) {
		display.value = null
	}

	removeDisplay (display) {
		display.value = display.value.split('').splice(0, display.value.length - 1).join('')
	}

	calculate ( display) {
		if (display.value.includes('✕')) {
			let nums = display.value.split('✕')
			display.value = String(parseFloat(nums[0]) * parseFloat(nums[1]))
		}
		if (display.value.includes('÷')) {
			let nums = display.value.split('÷')
			display.value = String(parseFloat(nums[0]) / parseFloat(nums[1]))
		}
		if (display.value.includes('+')) {
			let nums = display.value.split('+')
			display.value = String(parseFloat(nums[0]) + parseFloat(nums[1]))
		}
		if (display.value.includes('-')) {
			let nums = display.value.split('-')
			display.value = String(parseFloat(nums[0]) - parseFloat(nums[1]))
		}
	}
}
let calculater = new Calculator()

for(let num of nums) {
	num.onclick = () => {
		calculater.zero(display)
		calculater.concatNums(num.textContent, display)
	}
}
for(let sign of signs) {
	sign.onclick = () => {
		if( display.value != '') {
			calculater.concatSigns(sign.textContent, display)
		}
	}
}
clearButton.onclick =  () => calculater.clearDisplay(display)
removeButton.onclick = () => calculater.removeDisplay(display)
equal.onclick = () => calculater.calculate(display)
dot.onclick = () => calculater.concatDot(dot.textContent, display)





