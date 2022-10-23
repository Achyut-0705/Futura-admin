import styles from "../styles/components/CustomInput.module.scss";

function CustomInput({
  label = "label",
  type = "text",
  placeholder = "placeholder",
  value,
  onChange,
  ...props
}) {
  return (
    <div className={styles.container}>
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
}

export default CustomInput;
