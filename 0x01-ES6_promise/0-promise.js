function getResponseFromAPI() {
	return new Promise((return, reject) => {
		getLoad(() => {
			const response = "Load";
			resolve(response);
		}, 2000);
	});
}
