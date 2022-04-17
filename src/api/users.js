import { APIURL } from '../consts';
import axios from 'axios';
import cookieCutter from "cookie-cutter"

export const apiSignIn = async (identifier, password) => {
	try {
		const res = await axios.post(`${APIURL}/auth/local/`, { identifier, password });
		cookieCutter.set('ourToken', res.data.jwt);
		return res;
	} catch (error) {
		console.log(error)
	}
};

export const apiSearchUsers = async (name) => {
	try {
		const res = await axios.get(`${APIURL}/users?_where[name_contains]=${name}`);
		return res.data;
	} catch (error) {
		console.log(error)
	}
};