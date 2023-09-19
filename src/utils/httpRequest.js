import axios from "axios";

export const httpRequest = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
});

export const get = async (url, options = {}) => {
    try {
        const response = await httpRequest.get(url, options);
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const post = async (url, data, options = {}) => {
    const response = await httpRequest.post(url, data, options);
    return response.data;
};

export const remove = async (url, data, options = {}) => {
    const response = await httpRequest.delete(url, data, options);
    return response.data;
};

httpRequest.interceptors.request.use(function (config) {
    const token =
        "Bearer " + JSON.parse(localStorage.getItem("user"))?.meta.token;
    if (token) {
        config.headers.Authorization = token;
    }
    return config;
});

export * as request from "~/utils/httpRequest";
