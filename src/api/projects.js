import { APIURL } from '../consts';
import axios from 'axios';

export const apiGetProjects = async () => {
	try {
		const res = await axios.get(`${APIURL}/projects`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};

export const apiGetProject = async (id) => {
	try {
		const res = await axios.get(`${APIURL}/projects/${id}`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};

export const apiCreateProject = async (name, address) => {
	console.log(name)

	try {
		const config = {
			method: 'post',
			url: `${APIURL}/projects`,
			data: {
				name,
				address
			}
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}