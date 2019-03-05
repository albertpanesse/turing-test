import axios from '../utils/axios';
import {axiosErrorHandler} from '../utils/error';

export const getCategories = (departmentId, callback) => axios.get(`${process.env.API_URL}/categories/inDepartment/${departmentId}`)
	.then((resp) => {
		if (resp && resp.data) {
			callback(resp.data);
		}
	})
	.catch((err) => {
		axiosErrorHandler(err);
	});
