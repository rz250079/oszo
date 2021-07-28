
import { useEffect, useState } from 'react';
import useAuth from 'Hooks/useAuth';

import { useDispatch } from 'react-redux';
import { getUserReceipts } from 'State/user';

import { Center, Box, Rows, Loader, Line } from 'UIKit';

import { Link } from 'react-router-dom';

const Me = () => {
    const [list, setList] = useState(null);

    const dispatch = useDispatch();
    const user = useAuth();
    console.log(user);

    useEffect(() => {
        dispatch(getUserReceipts).then(resp => {
            setList(resp.payload);
        });
    }, []);

    const renderList = () => {
        if(list) {
            return list.map((i => {
                return (
                    <Link to={`/receipt/${i.transactionId}`}>
                        <Line justify="between">
                            <h4>{i.transactionId}</h4>
                            <h2>{i.balanceDue}$</h2>
                        </Line>
                    </Link>
                )
            }))
        }
        return <Loader/>
    }

    return (
        <Center>
            <Rows>
                <Center>
                    <Box>
                        <h1>My Reciepts</h1>
                    </Box>
                </Center>
                <Center>
                    <Box>
                        {renderList()}
                    </Box>
                </Center>
            </Rows>
        </Center>
    )
}

export default Me;