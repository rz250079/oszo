
import { useRedux } from 'Hooks/useRedux';
import { getUser } from 'State/user';

const TOKEN = process.env.REACT_APP_TOKEN_KEY;


const useAuth = () => {
    const getToken = () => {
        return localStorage.getItem(TOKEN) || ''
    }
    const token = getToken();

    const user = useRedux(['user'], getUser, { token });

    const register = (newToken) => {
        localStorage.setItem(TOKEN, newToken);
    }

    const clear = () => {
        localStorage.removeItem(TOKEN);
    }

   

    return {
        isLoading: user.isLoading,
        authed: !user.error && token && user.data ? true : false,
        token,
        register,
        clear,
        info: user.data
    }
}

export default useAuth;