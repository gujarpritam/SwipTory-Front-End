import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";
import { useDispatch } from "react-redux";
import { unSetRegistration } from "../../slices/registrationSlice";
import { registerUser } from "../../apis/userAuth";
import { setUser } from "../../slices/userSlice";

function Register() {
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

    const result = await registerUser(userData);
    console.log("result on register", result);
    if (result) {
      dispatch(setUser(result));
      dispatch(unSetRegistration());
      navigate("/");
    }

    document
      .getElementsByClassName(styles.userExistError)[0]
      .setAttribute("style", `display: flex;`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <div className={styles.form}>
          <button
            onClick={() => dispatch(unSetRegistration())}
            className={styles.closeRegistration}
          >
            X
          </button>
          <h3>Register to SwipTory</h3>
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
              value={userData.password}
              onChange={handleFormChange}
              type={"password"}
              placeholder="Enter password"
            ></input>
          </div>
          <p className={styles.error}>Fields can't be empty</p>
          <p className={styles.userExistError}>User already exists</p>

          <button onClick={() => handleSubmit()} className={styles.button}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
