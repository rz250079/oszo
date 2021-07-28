
import { useRedux } from 'Hooks/useRedux';
import { getUser, signUser } from 'State/user';

const TOKEN = process.env.REACT_APP_TOKEN_KEY;


const useAuth = () => {
    const user = useRedux(['user'], getUser);

    const register = (newToken) => {
        localStorage.setItem(TOKEN, newToken);
        user.dispatch(signUser, newToken);
    }

    const clear = () => {
        localStorage.removeItem(TOKEN);
        user.dispatch(signUser, '');
    }

    const getToken = () => {
        return localStorage.getItem(TOKEN) || ''
    }

    const token = getToken();

    return {
        authed: token ? true : false,
        token,
        register,
        clear,
        info: user.data
    }
}

export default useAuth;