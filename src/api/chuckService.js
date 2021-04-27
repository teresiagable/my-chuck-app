import axios from 'axios';

class chuckService {
	async getJoke() {
		let funfact = '';

		const config = {
			method: 'get',
			url: 'https://rapidapi.p.rapidapi.com/jokes/random',
			headers: {
				'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
				'x-rapidapi-key': '1a4e58465fmsh3afbee6ec4419bcp10eb41jsn6534d65361e8',
			},
		};

		// Make a request for a user with a given ID
		await axios
			.request(config)
			.then(function (response) {
				funfact = response.data.value;
				console.log('response', response);
				console.log('response.data', response.data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			});

		return funfact;
	}
}

export default new chuckService();
