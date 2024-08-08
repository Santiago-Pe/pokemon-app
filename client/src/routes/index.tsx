// src/routes/routes.tsx
import React from "react";
import { createBrowserRouter, RouteObject } from "react-router-dom";

import battleLogsRoutes from "./battleLog/battleLogRoutes";
import errorRoutes from "./error/errorRoutes";
import homeRoutes from "./home/homeRoutes";
import Layout from "../layout/layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [homeRoutes, battleLogsRoutes, errorRoutes],
  },
];

// Crea tu enrutador principal usando `createBrowserRouter`
const router = createBrowserRouter(routes);

export default router;
