import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {
    
    const loggedIn = useAuthStore((state) => state.isLoggedIn)();
    return loggedIn ? <>{children}</> : <Navigate to="/" />;
};
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
};

export default PrivateRoute;
