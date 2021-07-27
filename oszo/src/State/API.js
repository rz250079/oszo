import axios from 'axios';


const instance = axios.create({
    baseURL: `${process.env.REACT_APP_QR_URL}/`,
    timeout: 3000,
    headers: {'Content-Type': 'application/json'}
});

export const api = instance;

export const GET = (type, url, query) => fetch('get', type, url, query);
export const POST = (type, url) => fetch('post', type, url);
export const PUT = (type, url) => fetch('put', type, url);
export const PATCH = (type, url) => fetch('patch', type, url);
export const DELETE = (type, url) => fetch('delete', type, url);

const fetch = (req, type, url, query = {}) => {

    return async dispatch => {
        try {
            const resp = await instance[req](url, req === 'get' ? { params : query }:  query);
            console.log(resp);

            dispatch({
                type,
                payload: resp.data
            })

        } catch (error) {
            console.error(error.message, error.response);

            dispatch({
                type, 
                payload: {
                    error: true,
                    message: error.message,
                    response: error?.response?.data
                }
            })
            
        }
    }
}



