const btn = document.querySelector(`.button`)
const btnDelAll = document.querySelector(`.remove-all`)
const div = document.querySelector(`.image`)
const inp = document.querySelector(`.input`)

// btnDelAll.addEventListener(`click`, delALL)

function delALLImage() {
	e.preventDefault()
	div.innerHTML = ``
}

btn.addEventListener(`click`, getImage)

function getImage(e) {
	e.preventDefault()
	if (inp.value > 0) {
		getStart()
	}

}

function getStart() {
	const promise = getResponse(inp.value)
	promise.then((data) => {
		showImage(data)
	})

}

function showImage(data) {
	data.forEach(el => {
		const img = document.createElement(`img`)
		img.src = el.url
		div.append(img)
	});
}