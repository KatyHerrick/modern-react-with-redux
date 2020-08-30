import axios from 'axios';

const CLIENT_ID = '';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: `Client-ID ${CLIENT_ID}`
	}
});