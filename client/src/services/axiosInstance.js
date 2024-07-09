import axios from "axios";
const DB_HOST = import.meta.env.VITE_DB_HOST;
const api = axios.create({
	baseURL: DB_HOST,
});

export default api;
