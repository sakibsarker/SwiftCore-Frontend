// prop-types is a library for typechecking of props
import PropTypes from "prop-types";
import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    const { userInfo } = useSelector(state => state.auth);

    // If userInfo exists, display the child components (i.e., the component being protected)
    if (userInfo) {
        return children;
    }

    // If userInfo does not exist, redirect to the sign-in page
    return <Navigate to="/authentication/sign-in/cover" replace />;
}

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default PrivateRoute;




// import React from 'react'
// import { Outlet,Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// const PrivateRoute = () => {
//     const {userInfo}=useSelector(state=>state.auth)
//     return userInfo?<Outlet/>:<Navigate to="/authentication/sign-in/cover" replace/>
// }

// export default PrivateRoute
