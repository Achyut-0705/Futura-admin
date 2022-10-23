import "./styles/global.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="requests" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </Router>
  );
}

export default App;
