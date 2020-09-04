const CORS_URL = 'https://cors-anywhere.herokuapp.com'
const API_URL = 'https://quizapp-v2.herokuapp.com'

const request = async (
    endpoint: string, 
    method?: string, 
    data?: any, 
    token?: string
) => {
    const url = `${CORS_URL}/${API_URL}${endpoint}`
    const config = {
        method,
        headers: {
            'Content-Type': 'application/json',
            // 'Authorization': `Bearer ${token}`
        },
        // body: JSON.stringify(data)
    }

    // if(method === 'POST') {
    //     config.body = JSON.stringify(data)
    // }

    return await fetch(url, config).then(res => res)
}

const get = (endpoint:string, token?: string) => request(endpoint, 'GET', {}, token)
const post = (endpoint:string, data: any) => request(endpoint, 'POST', data);
// const put = (endpoint:string, data: any): object => request(endpoint, 'PUT', data);
// const _delete = (endpoint:string): object => request(endpoint);

export default {
    get,
    post,
    // put,
    // delete: _delete
};