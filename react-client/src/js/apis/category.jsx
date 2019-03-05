import axios from '../utils/axios';
import {axiosErrorHandler} from '../utils/error';

export const getCategories = (departmentId, callback) => axios.get(`${process.env.API_URL}/category/get/byDepartment/${departmentId}`)
	.then((resp) => {
		if (resp && resp.data.success === true) {
			callback(resp.data.categories);
		}
	})
	.catch((err) => {
		axiosErrorHandler(err);
	});
