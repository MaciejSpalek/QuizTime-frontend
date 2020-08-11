const API_URL = 'http://localhost:5000'

const request = (endpoint: string, method?: string, data?:any) => {
    const url = `${API_URL}${endpoint}`
    const config = {
        method,
        headers: {
            'Content-type': 'application/json'
        }
    }

    // if(method === 'POST') {
    //     config.body = JSON.stringify(data)
    // }

    return fetch(url, config)
            .then(response => response.json())

}

const get = (endpoint:string): object => request(endpoint);
const post = (endpoint:string, data: any) : object => request(endpoint, 'POST', data);
const put = (endpoint:string, data: any): object => request(endpoint, 'PUT', data);
const _delete = (endpoint:string): object => request(endpoint);

export default {
    get,
    post,
    put,
    delete: _delete
};