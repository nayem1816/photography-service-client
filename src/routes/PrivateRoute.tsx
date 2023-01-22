import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../components/Login/firebase.init';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/signin" state={{ from: location }} replace />;
    }

    return children;
};

export default PrivateRoute;
