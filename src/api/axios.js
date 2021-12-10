import axios from 'axios';

const axiosInstance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	headers: {
		'Content-type': 'application/json',
	},
});

export default axiosInstance;
