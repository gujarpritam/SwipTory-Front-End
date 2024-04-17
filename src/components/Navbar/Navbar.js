import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.nav}>
      <div className={styles.heading}>SwipTory</div>
      <div>
        <button className={styles.register}>Register Now</button>
        <button className={styles.login}>Sign In</button>
      </div>
    </div>
  );
}

export default Navbar;
