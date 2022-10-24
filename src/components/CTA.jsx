import styles from "../styles/components/CTA.module.scss";

function CTA({ text = "CTA", type = "", onClick = () => {}, ...rest }) {
  return (
    <button
      className={styles.container}
      type={type}
      onClick={onClick}
      {...rest}
    >
      {text}
    </button>
  );
}

export default CTA;
