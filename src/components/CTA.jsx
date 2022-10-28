import styles from "../styles/components/CTA.module.scss";

function CTA({ text = "CTA", type = "", ...rest }) {
  return (
    <button className={styles.container} type={type} {...rest}>
      {text}
    </button>
  );
}

export default CTA;
