
import { Redirect, Route } from 'react-router-dom';
import useAuth from 'Hooks/useAuth';

const AuthRoute = ({component: Component, authed, ...rest}) => {
    const user = useAuth();

    const render = (props) => {
        if(user.authed) {
            return <Component {...props} />
        }
        if(user.isLoading) {
          return null;
        }
        return <Redirect to="/login" />
    }
    return (
      <Route {...rest} render={render} />
    )
  }

  export default AuthRoute;