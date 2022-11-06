import "./styles/global.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
// import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import ProtectedRoute from "./utils/ProtectedRoutes";
import PendingRequests from "./pages/PendingRequests";
import AcceptedRequest from "./pages/AcceptedRequests";
import RejectedRequest from "./pages/RejectedRequests";
// import EditProfile from "./pages/EditProfile";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<Layout />}>
            <Route path="/" index element={<PendingRequests />} />

            <Route path="request">
              <Route path="accepted" element={<AcceptedRequest />} />
              <Route path="rejected" element={<RejectedRequest />} />
              <Route path="pending" element={<ProtectedRoutes />} />
            </Route>
            {/* <Route path="profile/edit" index element={<EditProfile />} /> */}
          </Route>
        </Route>
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
