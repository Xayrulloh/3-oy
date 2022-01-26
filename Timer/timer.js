class Timer {
    startInterval
    start () {
        this.startInterval = setInterval(() => {
            let date = new Date()
            console.clear()
            console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
        }, 1000) 
    }
    notify (hourMinute, str) {
            let hour = +hourMinute.split(':')[0]
            let minute = +hourMinute.split(':')[1]
            let date = new Date()
            if (minute >= date.getMinutes() && hour >= date.getHours()) {
                let setinterval = setInterval(() => {
                    let date = new Date()
                    console.clear()
                    console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}    ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}     remaining: ${hour-date.getHours()} hours and ${minute-date.getMinutes()} minutes`)
                    if (hour-date.getHours() == 0 && minute-date.getMinutes() == 0) {
                        console.clear()
                        console.log(str);
                        clearInterval(setinterval)
                        clearInterval(this.startInterval)

                    }
                }, 1000)
            }else{
                console.log(new Error('Are you idiot?').message);
        }
    }
}

let timer = new Timer
timer.start()
timer.notify('20:32', 'Uygon dars boshlandi')