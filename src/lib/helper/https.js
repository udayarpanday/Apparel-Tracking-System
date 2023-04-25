import axios from 'axios';

const backend = axios.create({
    baseURL: 'http://127.0.0.1:8000/',
});
backend.defaults.withCredentials = true;

const httpGet = async (url, config) => {
    return await backend.get(url, config);
};

const httpPost = async (url, data, config) => {
    return await backend.post(url, data, config);
};

const httpPut = async (url, data, config) => {
    return await backend.put(url, data, config);
};

const httpDelete = async (url, config) => {
    return await backend.delete(url, config);
};

export {httpGet, httpPost, httpPut, httpDelete};