import AnimatedBackground from "../components/AnimatedBackground";
import CustomInput from "../components/CustomInput";
import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../components/CTA";
import instance from "../utils/axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username.trim().length === 0 || password.trim().length === 0) {
      alert("Please enter a valid username and password");
      return;
    }
    const result = await instance.post("/auth/login/admin", {
      email: "shuklaachyut2002@gmail.com",
      password: "test@123",
    });
    console.log(result.data);
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

          <CTA
            text="SIGN IN"
            type="submit"
            style={{ marginTop: "2rem", width: "80%" }}
          />
          <Link to="/">Forgot Your Password?</Link>
        </form>
      </div>
    </>
  );
}

export default Login;
