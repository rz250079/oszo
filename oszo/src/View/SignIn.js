import { LogoSm, Rows, Line, Center, Box, Input, Btn } from 'UIKit';

import useAuth from 'Hooks/useAuth';
import useInput from 'Hooks/useInput';

import { useDispatch } from 'react-redux';

import { signUser } from 'State/user';

const SignIn = (props) => {
    const user = useAuth();
    const dispatch = useDispatch();

    const username = useInput('');
    const password = useInput('');
    const email = useInput('');

    const handleLogin = async () => {
        console.log(username, password, email);
        const resp = await dispatch(signUser({ 
            Username: username.value,
            Password: password.value,
            Mail: email.value,
            Token: ''
        }))

        console.log(resp);
        if(resp.suceess) {
            user.register(resp.payload);
            props.history.push('/me');
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
                        <h1 className="loginHeader">Hi!</h1>
                        <h1 className="loginHeader">Please Sign In</h1>
                    </Line>
                    <Rows>
                        <Input {...username} i="user" type="username" placeholder="Enter Username"  />
                        <Input {...password} i="key" type="password" placeholder="Enter Password" />
                        <Input {...email} i="at" type="email" placeholder="Enter Email" />
                    </Rows>
                    <Center>
                        <Btn onClick={handleLogin}>Register</Btn>
                    </Center>
                </Rows>
            </Box>
        </Center>
    )

}

export default SignIn;