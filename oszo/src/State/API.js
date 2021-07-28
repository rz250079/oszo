import axios from 'axios';


const instance = axios.create({
    baseURL: `${process.env.REACT_APP_QR_URL}/`,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem(process.env.REACT_APP_TOKEN_KEY)}`
    }
});

export const api = instance;

export const GET = (...args) => fetch('get', ...args);
export const POST = (...args) => fetch('post', ...args);
export const PUT = (...args) => fetch('put', ...args);
export const PATCH = (...args) => fetch('patch', ...args);
export const DELETE = (...args) => fetch('delete', ...args);

const fetch = (req, type, url, query = {}) => {

    return async dispatch => {
        try {
            const resp = await instance[req](url, req === 'get' ? { params : query }:  query);

            const data = {
                suceess: true,
                type,
                payload: resp.data
            }

            dispatch(data);

            return data;

        } catch (error) {
            console.error(error.message, error.response);

            const data = {
                error: true,
                type, 
                payload: {
                    error: true,
                    message: error.message,
                    response: error?.response?.data
                }
            }

            dispatch(data);

            return data;
            
        }
    }
}



