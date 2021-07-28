
import { GET, POST } from "./API";


export const getUser = token => GET('GET_USER', 'GetCustomer', { ...token });
export const getUserReceipts = GET('GET_USER_RECEIPTS', 'GetCustomerReceipts', { customerToken: localStorage.getItem(process.env.REACT_APP_TOKEN_KEY) });

export const signUser = info => POST('SIGN_USER',  'Register', { ...info });
export const loginUser = info => POST('LOGIN_USER',  'Login', { ...info });


export const userReducer = (user = null, action) => {
    switch(action.type) {
        case 'GET_USER':
            return action.payload || {};
        default:
            return user;
    }

    
}
