import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
    const logIn = sessionStorage.getItem('logIn');
    const role = sessionStorage.getItem('Role');

    return (logIn === 'true' && role === 'admin') 
        ? children 
        : <Navigate to='/login' />;
}

export default PrivateRoute;