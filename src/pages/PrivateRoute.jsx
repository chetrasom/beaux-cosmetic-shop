import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectorAuth } from "../features/auth/authSlice";
// import { toast } from 'react-toastify';

// eslint-disable-next-line no-unused-vars
const PrivateRoute = ({ children, ...rest }) => {
    const { myUser } = useSelector(selectorAuth);

    // return myUser === true ? <>{children}</> : ( <Navigate to="/" />);
    return myUser === true ? (
        <>{children}</>
    ) : (
        <>
            <Navigate to="/" />
            {/* {toast.warning('Please login first!')} */}
            
        </>
    )
}

export default PrivateRoute;

// toast.warning('Logout successfully!')

PrivateRoute.propTypes = {
    children: PropTypes.any
}