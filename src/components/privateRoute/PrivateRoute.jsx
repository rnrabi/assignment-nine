import { useContext } from "react";
import { authContext } from "../contextApi/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user } = useContext(authContext);
    if(user){
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}