import styles from "../styles/components/RequestCard.module.scss";
import defaultAvatar from "../images/defaultAvatar.png";
import CTA from "./CTA";

function RequestCard({
  type = "pending",
  id = "xxxx5678",
  admin = "Admin",
  on = "12/12/2019",
  name = "John Doe",
  onAccept = () => {},
  onReject = () => {},
  onMoveToPending = () => {},
}) {
  let bottom;
  if (type === "pending") {
    bottom = () => {
      return (
        <div className={styles.pendingDetails}>
          <div className={styles.id}>ID: {id}</div>
          <div className={styles.btns}>
            <button className={styles.acceptBtn} onClick={onAccept}>
              Accept
            </button>
            <button className={styles.rejectBtn} onClick={onReject}>
              Decline
            </button>
          </div>
        </div>
      );
    };
  } else if (type === "accepted") {
    bottom = () => {
      return (
        <div className={styles.pendingDetails}>
          <div className={styles.accepted}>
            <div className={styles.id}>ID: {id}</div>
            <div className={styles.id}>Accepted On: {on}</div>
            <div className={styles.id}>Accepted By: {admin}</div>
          </div>
          <div className={styles.pendingBtn}>
            <CTA
              style={{ width: "100%" }}
              text="Move To Pending"
              onClick={onMoveToPending}
            />
          </div>
        </div>
      );
    };
  } else if (type === "rejected") {
    bottom = () => {
      return (
        <div className={styles.pendingDetails}>
          <div className={styles.accepted}>
            <div className={styles.id}>ID: {id}</div>
            <div className={styles.id}>Accepted On: {on}</div>
            <div className={styles.id}>Accepted By: {admin}</div>
          </div>
          <div className={styles.pendingBtn}>
            <CTA
              style={{ width: "100%" }}
              text="Move To Pending"
              onClick={onMoveToPending}
            />
          </div>
        </div>
      );
    };
  }
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageWrapper}>
          <img src={defaultAvatar} alt="default avatar" />
        </div>
      </div>
      <div className={styles.bottom}>
        <h1>{name}</h1>
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
