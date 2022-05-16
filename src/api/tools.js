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

export const apiCreateTool = async (name) => {
	try {
		const config = {
			method: 'post',
			url: `${APIURL}/tools`,
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

export const apiAddToolsToSubsection = async (sectionID, sections) => {
	try {
		const config = {
			method: 'put',
			url: `${APIURL}/sections/${sectionID}`,
			data: {
				sections
			}
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}

export const apiCreateSubection = async (sectionID, sections) => {
	try {
		const config = {
			method: 'put',
			url: `${APIURL}/sections/${sectionID}`,
			data: {
				sections
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

export const apiDeleteSection = async (id) => {
	try {
		const config = {
			method: 'delete',
			url: `${APIURL}/sections/${id}`
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}

export const apiUpdateSection = async (id, newData) => {
	try {
		const config = {
			method: 'put',
			url: `${APIURL}/sections/${id}`,
			data: newData
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}