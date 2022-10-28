import AnimatedBackground from "../components/AnimatedBackground";
import CustomInput from "../components/CustomInput";
import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../components/CTA";
import instance from "../utils/axios";
import { success, error, warning } from "../utils/Toasties";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      warning("Please enter a valid username and password");
      return;
    }
    instance
      .post("/auth/login/admin", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("is_admin", res.data.is_admin);
          success("Login successful");
          setTimeout(() => {
            navigate("/");
          }, 3000);
        } else {
          error("Invalid Credentials");
        }
      })
      .catch((err) => {
        error(err.message);
      });
  };

  return (
    <>
      <AnimatedBackground />
      <div className={styles.context}>
        <form onSubmit={handleSubmit}>
          <CustomInput
            label="Email"
            placeholder="Email"
            type="email"
            value={email}
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
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
      <ToastContainer />
    </>
  );
}

export default Login;
