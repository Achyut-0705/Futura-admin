import "./styles/global.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import ProtectedRoute from "./utils/ProtectedRoutes";

function App() {
  <Router>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoute />}>
        <Route path="/" index element={<Home />} />
      </Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  </Router>;
}

export default App;
