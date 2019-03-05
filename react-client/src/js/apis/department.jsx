import axios from '../utils/axios';
import {axiosErrorHandler} from '../utils/error';

export const getDepartments = callback => axios.get(`${process.env.API_URL}/department/get/all`)
	.then((resp) => {
		if (resp && resp.data.success === true) {
			callback(resp.data.departments);
		}
	})
	.catch((err) => {
		axiosErrorHandler(err);
	});
