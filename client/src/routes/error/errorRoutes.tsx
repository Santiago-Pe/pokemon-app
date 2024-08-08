// src/routes/error/errorRoutes.tsx
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../components";

const errorRoutes: RouteObject = {
  path: "*",
  element: (
    <Loadable component={lazy(() => import("../../pages/error/errorPage"))} />
  ),
};

export default errorRoutes;
