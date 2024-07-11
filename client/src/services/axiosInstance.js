import axios from "axios";
const DB_HOST = import.meta.env.VITE_DB_HOST;
export const api = axios.create({
	baseURL: DB_HOST,
	withCredentials: true,
});

export default api;
