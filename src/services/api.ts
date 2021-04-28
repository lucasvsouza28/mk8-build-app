import axios from 'axios';

export const baseUrl = 'https://mk8-build-api.herokuapp.com';

const api = axios.create({
    baseURL: baseUrl
});

export default api;