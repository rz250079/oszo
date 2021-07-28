import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Error, Loader } from 'UIKit';

export const useRedux = (item, getter) => {
    const resp = useSelector(state => state[item]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getter);
    }, [])

    const renderState = (renderer) => {
        if(!resp) {
            return <Loader />
        }
    
        if(resp.error) {
            return <Error {...resp} />;
        }
        return renderer ? renderer() : null;
    }

    return {
        isLoading: resp ? false : true,
        error: resp ? resp.error : false,
        data: resp,
        dispatch: async (func, ...args) => {
            console.log(func);
            const resp = await dispatch(func(...args));
            console.log('done', resp);
        },
        render: renderState
    }
}

export default useRedux