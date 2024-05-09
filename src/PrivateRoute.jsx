import { Navigate, Outlet } from "react-router-dom";
import { AppRoutes } from "./AppRoutes ";

function PrivateRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to={AppRoutes.Login} />;
}

export default PrivateRoute;
