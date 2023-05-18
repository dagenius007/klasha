import { lazy } from "react";
import { Route } from "react-router-dom";

import DashboardLayout from "../layouts/DashboardLayout";

const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const baseName = process.env.PUBLIC_URL;

  return (
    <Route {...rest}>
      <DashboardLayout>
        <Component />
      </DashboardLayout>
    </Route>
  );
};

export default PrivateRoute;
