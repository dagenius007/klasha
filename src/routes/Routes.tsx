import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import DashboardLayout from "../layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";

const Dashboard = lazy(() => import("../pages/Dashboard"));
const Transactions = lazy(() => import("../pages/Transaction"));

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<p>loading...</p>}>
        <Switch>
          <PrivateRoute
            exact
            path="/transactions"
            layout={DashboardLayout}
            component={Transactions}
          />
          <PrivateRoute
            exact
            path=""
            layout={DashboardLayout}
            component={Dashboard}
          />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
