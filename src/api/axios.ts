import axios from "axios";

export const noBaseUrlApi = axios.create();

export const api = axios.create({ baseURL: import.meta.env.VITE_DOMAIN });
