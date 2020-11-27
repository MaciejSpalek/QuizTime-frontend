import axios from 'axios'
export const CORS_URL = 'https://cors-anywhere.herokuapp.com'
export const API_URL = 'http://localhost:8080/api'
export const axiosInstance = axios.create({
    baseURL: `${API_URL}`
})
