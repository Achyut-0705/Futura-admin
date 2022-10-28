import { Outlet } from "react-router-dom";
import styles from "../styles/Layout.module.scss";
import Logo from "../images/logo.svg";
import CTA from "../components/CTA";
import { NavLink, useNavigate } from "react-router-dom";

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
        <ul>
          <li className={`${activeLink === "/" ? styles.active : ""}`}>
            <NavLink to="/">PENDING REQUESTS</NavLink>
          </li>
          <li
            className={`${
              activeLink === "/request/accepted" ? styles.active : ""
            }`}
          >
            <NavLink to="request/accepted">ACCEPTED REQUESTS</NavLink>
          </li>
          <li
            className={`${
              activeLink === "/request/rejected" ? styles.active : ""
            }`}
          >
            <NavLink to="request/rejected">REJECTED REQUESTS</NavLink>
          </li>
          <li
            className={`${activeLink === "/profile/edit" ? styles.active : ""}`}
          >
            <NavLink to="profile/edit">EDIT PROFILE</NavLink>
          </li>
        </ul>
        <CTA
          text="LOGOUT"
          style={{ width: "75%", position: "absolute", bottom: "10%" }}
          onClick={logout}
        />
      </nav>
      <Outlet />
    </div>
  );
}

export default Layout;
