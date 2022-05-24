import { APIURL } from '../consts';
import axios from 'axios';

export const apiGetProjects = async (data) => {
	try {
		const res = await axios.get(`${APIURL}/projects`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};

export const apiDeleteProject = async (id) => {
	try {
		const config = {
			method: 'delete',
			url: `${APIURL}/project/${id}`
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}

export const apiGetProject = async (id) => {
	try {
		const res = await axios.get(`${APIURL}/projects/${id}`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};

export const apiCreateProject = async (name, address, manager) => {
	console.log(name)

	try {
		const config = {
			method: 'post',
			url: `${APIURL}/projects`,
			data: {
				name,
				address,
				manager
			}
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}

export const apiAddWorkerToProject = async (workers, project) => {
	try {
		const config = {
			method: 'put',
			url: `${APIURL}/projects/${project}`,
			data: {
				workers: workers
			}
		}
		const res = await axios(config);
		return res.data;
	} catch (error) {
		console.log(error)
	}
}

