import axios from 'axios'
export const LOCAL_URL = 'http://localhost:8080/api';
export const PRODUCTION_URL = 'https://quiztime-backend.herouapp.com/api';
export const axiosInstance = axios.create({
    baseURL: `${PRODUCTION_URL}`
})
