import { Navigate } from "react-router";

const ProtectedRoute = ({ children }) => {
    const logIn = sessionStorage.getItem('LogIn');
    return logIn === 'true' ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;