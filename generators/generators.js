let arr = [
    {text: 'Code yoziw ketma ketligi'},
    {text: '1) Yaxwi plan tuziw'},
    {text: '2) wowmasli'},
    {text: '3) html va css lani cotki qib chrome dan topiw'},
    {text: '4) database tuzvoliw'},
    {text: '5) html va css lani cunvoliw'},
    {text: '6) wunga qarab qogan code yoziw'},
    {text: '7) asab bi buzmasli'},
    {text: '8) cpu ni asrash'},
    {text: '9) cpu qizisa cs go oynaw'},
    {text: '10) tugatiw'},
]

function* doingWorks() {
    for (let a = 0; a < arr.length; a++) {
        yield arr[a].text
    }
}

let gen = doingWorks()
div.textContent = gen.next().value

btn.onclick = () => {
    let what = gen.next()
    if (!what.done) {
        div.textContent = what.value
    } else div.textContent = 'tugadi'
}


