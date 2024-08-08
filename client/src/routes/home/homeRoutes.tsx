// src/routes/home/homePage.tsx
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../components";

const homeRoutes: RouteObject = {
  path: "/",
  element: (
    <Loadable component={lazy(() => import("../../pages/home/homePage"))} />
  ),
};

export default homeRoutes;
