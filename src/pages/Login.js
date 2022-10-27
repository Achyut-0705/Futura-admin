import AnimatedBackground from "../components/AnimatedBackground";
import CustomInput from "../components/CustomInput";
import styles from "../styles/Login.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import CTA from "../components/CTA";
import instance from "../utils/axios";
import { success, error, warning } from "../utils/Toasties";
import { ToastContainer } from "react-toastify";
// import { GlobalContext } from "../App";
// import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const { setToken } = useContext(GlobalContext);
  // const { setToken } = useContext(GlobalContext);
  // console.log(setToken);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim().length === 0 || password.trim().length === 0) {
      warning("Please enter a valid username and password");
      return;
    }
    console.log("reached here");
    instance
      .post("/auth/login/admin", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("is_admin", res.data.is_admin);
          // setToken(res.data.token);
          success("Login successful");
          navigate("/");
        } else {
          error(res.data.message);
        }
      })
      .catch((err) => {
        error(err.message);
      });

    // try {
    //   if (result.status === 200) {
    //     success("Login successful");
    //     localStorage.setItem("token", result.data.token);
    //     window.location.href = "/";
    //   }
    // } catch (err) {
    //   console.log("reached here");
    //   error(err.response.data.message);
    // }
    // console.log(result);
    // if (result.status === 200) {
    //   // alert("Login Successful");
    //   success("Login Successful");
    // } else if (result.status === 401) {
    //   // alert("Invalid Credentials");
    //   error("Invalid Credentials");
    // }
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
