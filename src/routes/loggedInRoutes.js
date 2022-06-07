import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { checkAuthentication } from "../services/auth";

const LoggedInRoute = (props) => {
    const isAuthenticated = checkAuthentication();
    return isAuthenticated ? <Outlet /> : <Navigate to={"/"} />;
};

export default LoggedInRoute;
