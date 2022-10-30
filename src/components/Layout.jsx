import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.scss";
import Logo from "../images/logo.svg";
import CTA from "../components/CTA";
import { useNavigate } from "react-router-dom";

function Layout() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("is_admin");
    navigate("/login");
  };
  const activeLink = window.location.href.split("#")[1];
  return (
    <div className={styles.container}>
      <nav>
        <img src={Logo} alt="Logo" />
        <div className={styles.seperator}>
          <ul>
            <li
              className={`${activeLink === "/" ? styles.active : ""}`}
              onClick={() => navigate("/")}
            >
              PENDING REQUESTS
            </li>
            <li
              className={`${
                activeLink === "/request/accepted" ? styles.active : ""
              }`}
              onClick={() => navigate("request/accepted")}
            >
              ACCEPTED REQUESTS
            </li>
            <li
              className={`${
                activeLink === "/request/rejected" ? styles.active : ""
              }`}
              onClick={() => navigate("request/rejected")}
            >
              REJECTED REQUESTS
            </li>
            <li
              className={`${
                activeLink === "/profile/edit" ? styles.active : ""
              }`}
              onClick={() => navigate("profile/edit")}
            >
              EDIT PROFILE
            </li>
          </ul>
        </div>
        <CTA
          text="LOGOUT"
          // style={{ position: "absolute", bottom: "10%" }}
          style={{ width: "75%" }}
          onClick={logout}
        />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
