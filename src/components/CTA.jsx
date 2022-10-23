import styles from "../styles/components/CTA.module.scss";

function CTA({ text = "CTA", type = "", onClick = () => {} }) {
  return (
    <button className={styles.container} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default CTA;
