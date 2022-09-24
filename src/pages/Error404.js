import styles from "../styles/Error404.module.scss";
import RocketImage from "../images/rocket.svg";

function Error404() {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <img src={RocketImage} alt="rocket" />
      </div>
      <div className={styles.contentWrapper}>
        <h3>
          OOPS! Looks like you're trying to access something that does not
          exist.
        </h3>
        <h1>404!</h1>
        <h2>
          “Sometimes being lost is the best way to find yourself.” ― LJ Vanier,
          Ether: Into the Nemesis
        </h2>
      </div>
    </div>
  );
}

export default Error404;
