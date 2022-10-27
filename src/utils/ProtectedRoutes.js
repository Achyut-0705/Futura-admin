import { Navigate, Outlet } from "react-router-dom";
// import { useContext } from "react";
// import { GlobalContext } from "../App";

const ProtectedRoutes = () => {
  // const { token } = useContext(GlobalContext);
  // console.log(token);
  const token = localStorage.getItem("token");
  return token !== null ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
