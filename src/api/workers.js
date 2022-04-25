import axios from 'axios';
import { APIURL } from '../consts';

export const apiCreateWorker = async (name) => {
	try {
		const config = {
			method: 'post',
			url: `${APIURL}/workers`,
			data: {
				name
			}
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}

export const apiSearchWorkers = async (name) => {
	try {
		const res = await axios.get(`${APIURL}/workers?_where[name_contains]=${name}`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};