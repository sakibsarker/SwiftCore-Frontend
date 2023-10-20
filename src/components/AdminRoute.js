// import React from 'react'
// import { Outlet,Navigate } from "react-router-dom";
// import { useSelector } from 'react-redux';
// const AdminRoute = () => {
//     const {userInfo}=useSelector(state=>state.auth)

//     return userInfo && userInfo.isAdmin ?(<Outlet/>)
//     :(<Navigate to="/authentication/sign-in/cover" replace/>
//     );
// }

// export default AdminRoute

import PropTypes from "prop-types";
import React from 'react';
import { Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';

const AdminRoute = ({ children }) => {
    const { userInfo } = useSelector(state => state.auth);

    // If userInfo exists and the user is an admin, display the child components
    if (userInfo && userInfo.isAdmin) {
        return children;
    }

    // If not an admin or not authenticated, redirect to the sign-in page
    return <Navigate to="/authentication/sign-in/cover" replace />;
}

AdminRoute.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default AdminRoute;
