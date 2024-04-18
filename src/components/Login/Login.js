import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";
import { useDispatch } from "react-redux";
import { unSetLogin } from "../../slices/loginSlice";
import { loginUser } from "../../apis/userAuth";
import { setUser } from "../../slices/userSlice";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const handleFormChange = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async () => {
    if (!userData.username || !userData.password) {
      document
        .getElementsByClassName(styles.error)[0]
        .setAttribute("style", `display: flex;`);
      return;
    }

    const result = await loginUser(userData);
    console.log("result on login", result);
    if (result) {
      dispatch(setUser(result));
      dispatch(unSetLogin());
      navigate("/");
    }

    document
      .getElementsByClassName(styles.error)[0]
      .setAttribute("style", `display: none;`);

    document
      .getElementsByClassName(styles.invalidCredentialsError)[0]
      .setAttribute("style", `display: flex;`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.login}>
        <div className={styles.form}>
          <button
            onClick={() => dispatch(unSetLogin())}
            className={styles.closeLogin}
          >
            X
          </button>
          <h3>Login to SwipTory</h3>
          <div>
            <span>Username</span>
            <input
              className={styles.input}
              name="username"
              value={userData.username}
              onChange={handleFormChange}
              type={"username"}
              placeholder="Enter username"
            ></input>
          </div>

          <div>
            <span>Password</span>
            <input
              className={styles.input}
              name="password"
              // value={formData.password}
              onChange={handleFormChange}
              type={"password"}
              placeholder="Enter password"
            ></input>
          </div>

          <p className={styles.error}>Fields can't be empty</p>
          <p className={styles.invalidCredentialsError}>
            Please enter valid credentials
          </p>

          <button onClick={() => handleSubmit()} className={styles.button}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
