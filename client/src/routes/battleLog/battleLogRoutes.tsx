// src/routes/battleLog/battleLogPage.tsx.tsx
import React, { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { Loadable } from "../../components";

const battleLogRoutes: RouteObject = {
  path: "/battle-log",
  element: (
    <Loadable
      component={lazy(() => import("../../pages/battleLog/battleLogPage.tsx"))}
    />
  ),
};

export default battleLogRoutes;
