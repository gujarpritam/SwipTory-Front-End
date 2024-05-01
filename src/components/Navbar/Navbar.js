import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import Register from "../Register/Register";
import Login from "../Login/Login";
import AddStory from "../AddStory/AddStory";
import { useDispatch, useSelector } from "react-redux";
import { setRegistration } from "../../slices/registrationSlice";
import { setLogin } from "../../slices/loginSlice";
import { unSetUser } from "../../slices/userSlice";
import { setAddStory } from "../../slices/addStorySlice";

import bookmark from "../../assets/icons/bookmark.png";
import hamburger from "../../assets/icons/hamburger.png";
import userPicture from "../../assets/images/user-picture.png";
import { setBookmark, unSetBookmark } from "../../slices/bookmarkSlice";

function Navbar() {
  const registrationState = useSelector((state) => state.registration);
  const loginState = useSelector((state) => state.login);
  const userState = useSelector((state) => state.user);
  const addStoryState = useSelector((state) => state.addStory);

  let showLogout = false;

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

    dispatch(unSetBookmark());
    dispatch(unSetUser());
  };

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.heading}>SwipTory</div>
        {userState.value !== null ? (
          <div className={styles.subContainer}>
            <button
              onClick={() => {
                dispatch(setBookmark());
              }}
              className={styles.bookmarks}
            >
              <img src={bookmark} className={styles.bookmarkImage} />
              &nbsp; Bookmarks
            </button>
            <button
              onClick={() => {
                dispatch(setAddStory());
              }}
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
        <h4>{userState.value}</h4>
        <button onClick={handleLogout} className={styles.logout}>
          Logout
        </button>
      </div>
      {registrationState.value === 1 && <Register />}
      {loginState.value === 1 && <Login />}
      {addStoryState.value === 1 && <AddStory />}
    </>
  );
}

export default Navbar;
