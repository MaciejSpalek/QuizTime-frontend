import axios from 'axios'
// const API_URL = 'https://quiztime-backend.herokuapp.com/api';
const API_URL = 'http://localhost:5000/api';


export const axiosInstance = axios.create({
    baseURL: `${API_URL}`
});
