import AnimatedBackground from "../components/AnimatedBackground";
import CustomInput from "../components/CustomInput";
import styles from "../styles/Login.module.scss";
import { useState } from "react";
import CTA from "../components/CTA";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <AnimatedBackground />
      <div className={styles.context}>
        <form onSubmit={handleSubmit}>
          <CustomInput
            label="Username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <CustomInput
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <CTA text="SIGN IN" type="submit" />
        </form>
      </div>
    </>
  );
}

export default Login;
