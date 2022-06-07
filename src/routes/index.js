import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import LoggedInRoute from "./loggedInRoutes";
import LoggedOutRoute from "./loggedOutRoutes";
import Pages from "../pages";

const ApplicationRoutes = () => {
    useEffect(() => {}, []);
    return (
        <Routes>
            <Route path="/" element={<LoggedOutRoute />}>
                <Route path="/" element={<Pages.Public.HomePage />} />
            </Route>
            <Route path="/homepage" element={<LoggedOutRoute />}>
                <Route path="/homepage" element={<Pages.Public.HomePage />} />
            </Route>
            <Route path="/dashboard" element={<LoggedInRoute />}>
                <Route path="/dashboard" element={<Pages.Private.Dashboard />} />
            </Route>
            <Route path={"*"} exact={true} element={<Pages.Common.PageNotFound />} />
        </Routes>
    );
};

export default ApplicationRoutes;
