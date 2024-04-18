import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setRegistration } from "../../slices/registrationSlice";
import { setLogin } from "../../slices/loginSlice";
import { unSetUser } from "../../slices/userSlice";
import bookmark from "../../assets/icons/bookmark.png";
import hamburger from "../../assets/icons/hamburger.png";
import userPicture from "../../assets/images/user-picture.png";

function Navbar() {
  const state1 = useSelector((state) => state.registration);
  const state2 = useSelector((state) => state.login);
  const state3 = useSelector((state) => state.user);
  let showLogout = false;

  // const [loggedIn, setLoggedIn] = useState(state3.value);

  console.log("state3", state3);

  // useEffect(() => {
  //   if (state3.value !== null) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  // console.log("token", token);
  // console.log("isLoggedIn", isLoggedIn);
  // let showLogout = false;

  const dispatch = useDispatch();

  const showUser = (logoutDisplay) => {
    showLogout = logoutDisplay;
    if (showLogout) {
      document
        .getElementsByClassName(styles.userInfo)[0]
        .setAttribute("style", `display: flex;`);
    } else {
      document
        .getElementsByClassName(styles.userInfo)[0]
        .setAttribute("style", `display: none;`);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    document
      .getElementsByClassName(styles.userInfo)[0]
      .setAttribute("style", `display: none;`);

    dispatch(unSetUser());
    // setToken(localStorage.getItem("swiptoryToken"));
  };

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.heading}>SwipTory</div>
        {state3.value !== null ? (
          <div className={styles.subContainer}>
            <button
              // onClick={() => }
              className={styles.bookmarks}
            >
              <img src={bookmark} className={styles.bookmarkImage} />
              &nbsp; Bookmarks
            </button>
            <button
              // onClick={() => dispatch(setLogin())}
              className={styles.addStory}
            >
              Add Story
            </button>
            <img src={userPicture} className={styles.userPic} />
            <img
              src={hamburger}
              className={styles.hamburgerIcon}
              onClick={() => showUser(!showLogout)}
            />
          </div>
        ) : (
          <div className={styles.subContainer}>
            <button
              onClick={() => dispatch(setRegistration())}
              className={styles.register}
            >
              Register Now
            </button>
            <button
              onClick={() => dispatch(setLogin())}
              className={styles.login}
            >
              Sign In
            </button>
          </div>
        )}
      </div>
      <div className={styles.userInfo}>
        <h4>{state3.value}</h4>
        <button onClick={handleLogout} className={styles.logout}>
          Logout
        </button>
      </div>
      {state1.value === 1 && <Register />}
      {state2.value === 1 && <Login />}
    </>
  );
}

export default Navbar;
