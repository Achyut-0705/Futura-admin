import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { GlobalContext } from "../App";

const ProtectedRoutes = () => {
  const user = useContext(GlobalContext);
  // const isLogged = false;
  return user === null ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
