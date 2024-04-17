import React from "react";
import styles from "./Register.module.css";

function Register() {
  const handleFormChange = () => {};

  const handleSubmit = () => {};

  return (
    <div className={styles.container}>
      <div className={styles.register}>
        <div className={styles.form}>
          <button className={styles.close}>X</button>
          <h3>Register to SwipTory</h3>
          <div>
            <span>Username</span>
            <input
              className={styles.input}
              name="username"
              // value={formData.email}
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

          <button onClick={() => handleSubmit()} className={styles.button}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
