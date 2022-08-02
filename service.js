function getImage(inp) {
	const promise = axios.get(`https://jsonplaceholder.typicode.com/photos?id=${inp}`)
	return promise
		.then((response) => {
			return response.data
		})
}
function updateGoal(title, id, done) {
	const promise = axios.put(`https://repetitora.net/api/JS/Tasks`, {
		widgetid: 334334,
		title: title,
		taskid: id,
		done: done
	})
	return promise
		.then((response) => {
			return response.data
		})
}
function getTask() {
	const promise = axios.get(`https://repetitora.net/api/JS/Tasks?widgetid=334334&count=30`)
	return promise
		.then((response) => {
			return response.data
		})
}
function deleteTask(id) {
	const promise = axios.delete(`https://repetitora.net/api/JS/Tasks?widgetid=334334&taskId=${id}`)
	return promise
		.then((response) => {
			return response.data
		})
}


function createGoal(title) {
	const promise = axios.post(`https://repetitora.net/api/JS/Tasks`, {
		widgetid: 334334,
		title: title
	})
	return promise
		.then((response) => {
			return response.data
		})
}
