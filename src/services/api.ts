import axios from 'axios'
const API_URL = 'https://quiztime-backend.herokuapp.com/api';

export const axiosInstance = axios.create({
    baseURL: `${API_URL}`
});
