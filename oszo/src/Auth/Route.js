
import { Redirect, Route } from 'react-router-dom';
import useAuth from 'Hooks/useAuth';

const AuthRoute = ({component: Component, authed, ...rest}) => {
    const user = useAuth();
    console.log('user', user);

    const render = (props) => {
        if(user.authed) {
            return <Component {...props} />
        }
        <Redirect to={{pathname: '/login', state: {from: props.location}}} />
    }
    return (
      <Route {...rest} render={render} />
    )
  }

  export default AuthRoute;