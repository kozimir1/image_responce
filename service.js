function getResponse(inp) {
	const promise = axios.get(`https://jsonplaceholder.typicode.com/photos?id=${inp}`)
	return promise
		.then((response) => {
			return response.data
		})
}