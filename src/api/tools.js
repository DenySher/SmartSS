import axios from 'axios';
import { APIURL } from '../consts';

export const apiSearchTools = async (name) => {
	try {
		const res = await axios.get(`${APIURL}/tools?name_contains=${name}`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};