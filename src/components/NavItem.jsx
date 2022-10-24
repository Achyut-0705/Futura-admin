import styles from "../styles/NavItem.module.scss";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function NavItem({ title = "Home", link = "#" }) {
  const location = useLocation();
  return (
    <div className={styles.container}>
      <span className={`${location.pathname === link ? styles.active : ""}`} />
      <Link to={link}>{title}</Link>
    </div>
  );
}

export default NavItem;
