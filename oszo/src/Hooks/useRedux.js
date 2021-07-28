import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Error, Loader } from 'UIKit';

export const useRedux = (item, getter, args) => {
    const resp = useSelector(state => state[item]);

    const dispatch = useDispatch();

    useEffect(() => {
        if(args) {
            dispatch(getter(args));
        } else {
            dispatch(getter);
        }
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
            await dispatch(func(...args));
        },
        render: renderState
    }
}

export default useRedux