import React, { Component } from "react";
import { useNavigate,Route, redirect } from "react-router-dom";
const PrivateRoute = ({
    component:Component, isAuthenticated, ...rest})=> {
    const navigate = useNavigate();
    return (
        <Route {...rest} render={(props)=>
            (isAuthenticated ? <Component {...props}/> :
             (() => {navigate('/login');
             return null;
            })()
            )} />
    );
};

export default PrivateRoute;