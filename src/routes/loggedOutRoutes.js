import { Route, Navigate, Outlet } from "react-router-dom";
import { checkAuthentication } from "../services/auth";

const LoggedOutRoute = (props) => {
    debugger;
    const isAuthenticated = checkAuthentication();
    return isAuthenticated ? <Navigate to={"/dashboard"} /> : <Outlet />;
};

export default LoggedOutRoute;
