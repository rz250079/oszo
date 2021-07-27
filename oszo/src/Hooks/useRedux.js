import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Error, Loader } from 'UIKit';

import dots from 'Images/Loaders/dots.svg';

export const useRedux = (item, getter) => {
    const resp = useSelector(state => state[item]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getter);
    }, [])

    const renderState = () => {
        if(!resp) {
            return <Loader />
        }
    
        if(resp.error) {
            return <Error {...resp} />;
        }
        return null;
    }

    return {
        isLoading: resp ? false : true,
        error: resp ? resp.error : false,
        data: resp,
        render: renderState()
    }
}