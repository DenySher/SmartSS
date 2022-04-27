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

export const apiCreateSection = async (name) => {
	try {
		const config = {
			method: 'post',
			url: `${APIURL}/sections`,
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

export const apiAddSectionToProject = async (sections, project) => {
	try {
		const config = {
			method: 'put',
			url: `${APIURL}/projects/${project}`,
			data: {
				sections: sections
			}
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}