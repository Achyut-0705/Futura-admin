import styles from "../styles/NavBar.module.scss";
import NavItem from "./NavItem";

function NavBar() {
  return (
    <div className={styles.container}>
      <NavItem title="Home" link="/" />
      <NavItem title="About" link="/about" />
      <NavItem title="Become A Seller" link="/seller" />
    </div>
  );
}

export default NavBar;
