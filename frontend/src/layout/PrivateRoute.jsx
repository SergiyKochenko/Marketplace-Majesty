import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../store/auth';

const PrivateRoute = ({ children }) => {
    
    const loggedIn = useAuthStore((state) => state.isLoggedIn)();
    console.log(loggedIn)
    return loggedIn ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
