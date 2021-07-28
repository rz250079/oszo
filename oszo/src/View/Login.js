import { Icon, Rows, Line, Box, Center, LogoSm, Input, Btn } from 'UIKit';
import { Link, useLocation } from 'react-router-dom';

import useInput from 'Hooks/useInput';

import { useDispatch } from 'react-redux';
import { loginUser } from 'State/user';

import useAuth from 'Hooks/useAuth';

const Login = (props) => {
    const location = useLocation();
    const user = useAuth();
    const dispatch = useDispatch();

    const username = useInput('');
    const password = useInput('');

    const handleLogin = async () => {
        const resp = await dispatch(loginUser({
            UserName: username.value,
            Password: password.value,
        }))

        if(resp.suceess) {
            user.register(resp.payload);
            if(location.search) {
                props.history.push('/receipt/' + location.search.split('=')[1]);
            }else {
                props.history.push('/me');
            }
        } else {
            alert(resp.payload.message);
        }
    }

    return (
        <Center>
            <Box>
            <Rows extra>
                <Line>
                    <LogoSm />
                    <h1>Login</h1>
                </Line>
                <Rows>
                    <Input {...username} i="user" type="username" placeholder="Enter Username"></Input>
                    <Input {...password} i="key" type="password" placeholder="Enter Password"></Input>
                </Rows>
                <Center>
                    <Btn onClick={handleLogin}>Login</Btn>
                </Center>
                <Line>
                    <Icon i="user-tie"/>
                    <Link to="/register">First time here ? click here to register </Link>
                </Line>
            </Rows>
            </Box>
        </Center>
    )

}

export default Login;