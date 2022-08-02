const btn = document.querySelector(`.button`)
const btnDelAll = document.querySelector(`.remove-all`)
const btnGetTask = document.querySelector(`.btn-get-task`)
const div = document.querySelector(`.image`)
const inp = document.querySelector(`.input`)
const ulList = document.querySelector(`.list`)

btnDelAll.addEventListener(`click`, delALLImage)
btn.addEventListener(`click`, init)
btnGetTask.addEventListener(`click`, startTaskResponse)

function delALLImage(e) {
	e.preventDefault()
	div.innerHTML = ``

}
function init(e) {
	e.preventDefault()
	if (inp.value > 0) {
		startImageResponse()
	}
}
function startImageResponse() {
	const promise = getImage(inp.value)
	promise.then((data) => {
		showImage(data)
	})
}


function startTaskResponse(e) {
	e.preventDefault()
	createGoal(inp.value).then(() => {
		const promise = getTask()
		promise.then((data) => {
			showTask(data)
		}).then(() => {
			completeTask()
		})
	})
	// setTimeout(() => {

	// }, 3000)

}

function showImage(data) {
	data.forEach(el => {
		const img = document.createElement(`img`)
		img.src = el.url
		div.append(img)
	});
}


function showTask(data) {
	ulList.innerHTML = ``
	data.map(task => {
		ulList.insertAdjacentHTML(
			'afterbegin', `<li data-id="${task.id}" class="list__item">
			<input class="list__input" type="checkbox" name="" id="${task.id}">
			<label class="list__label" for="${task.id}">${task.title}</label>
			<button disabled type="button" class="list__button">Удалить</button>
		</li>`
		)
	});
}

function completeTask() {
	const listInput = document.getElementsByClassName(`list__input`)
	const arr = [...listInput]
	arr.forEach((el) => {
		el.addEventListener(`click`, () => {
			if (el.checked) {
				el.nextElementSibling.style.textDecoration = `line-through`
				el.nextElementSibling.nextElementSibling.disabled = false
				removeTask(el)
			} else {
				el.nextElementSibling.style.textDecoration = ``
				el.nextElementSibling.nextElementSibling.disabled = true
			}
		})
	})
}
function removeTask(el) {
	if (!!el) {
		el.nextElementSibling.nextElementSibling.addEventListener(`click`, () => {
			console.log(el.parentElement.dataset.id);
			deleteTask(el.parentElement.dataset.id)
			el.parentElement.remove()
		})
	}
}