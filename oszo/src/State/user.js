
import { GET, POST } from "./API";

const END_POINT = "user/"


export const getUser = GET('GET_USER', END_POINT + '');
export const signUser = info => POST('SIGN_USER', END_POINT + '', { info });


export const userReducer = (user = null, action) => {
    switch(action.type) {
        case 'GET_USER':
            return null;
        case 'SIGN_USER':
            return { id: 1, name: 'david'};
        default:
            return user;
    }

    
}
