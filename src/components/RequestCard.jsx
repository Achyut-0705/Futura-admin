import defaultAvatar from "../images/defaultAvatar.png";

import styles from "../styles/components/RequestCard.module.scss";

function RequestCard({ type = "pending", id = "xxxx5678" }) {
  let bottom;
  if (type === "pending") {
    bottom = () => {
      return (
        <div className={styles.pendingDetails}>
          <div className={styles.id}>ID: {id}</div>
          <div className={styles.btns}>
            <button>Accept</button>
            <button>Decline</button>
          </div>
        </div>
      );
    };
  } else if (type === "accepted") {
  } else if (type === "rejected") {
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img src={defaultAvatar} alt="default avatar" />
        </div>
      </div>
      <div className={styles.bottom}>
        <p>
          A Brand Description. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vestibulum maximus orci vitae sem feugiat congue. Sed
          non arcu eu velit suscipit molestie. Proin sed nibh at lectus aliquet
          efficitur....
        </p>
        {bottom()}
      </div>
    </div>
  );
}

export default RequestCard;
