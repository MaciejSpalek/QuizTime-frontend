import axios from 'axios'
export const CORS_URL = 'https://cors-anywhere.herokuapp.com'
export const API_URL = 'https://quizapp-v2.herokuapp.com'
export const axiosInstance = axios.create({
    baseURL: `${CORS_URL}/${API_URL}`
})
