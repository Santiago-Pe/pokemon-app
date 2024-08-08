// src/components/loader/lodable/lodable.tsx
import React, { Suspense } from "react";

import LoadableProps from "./lodable.interface";
import Loading from "../loading/loading";

const Loadable: React.FC<LoadableProps> = ({
  component: Component,
  ...props
}) => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

export default Loadable;
