import axios from 'axios'
const PRODUCTION_URL = 'https://quiztime-backend.herokuapp.com/api';
const DEVELOPMENT_URL = 'http://localhost:5000/api';
const getURL = () => process.env.NODE_ENV === 'development' ? DEVELOPMENT_URL : PRODUCTION_URL

export const axiosInstance = axios.create({
    baseURL: `${getURL()}`
});
