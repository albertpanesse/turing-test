import axios from '../utils/axios';
import {axiosErrorHandler} from '../utils/error';

export const getDepartments = callback => axios.get(`${process.env.API_URL}/departments`)
	.then((resp) => {
		if (resp && resp.data) {
			callback(resp.data);
		}
	})
	.catch((err) => {
		axiosErrorHandler(err);
	});
