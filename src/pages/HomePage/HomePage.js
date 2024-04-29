import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import styles from "./HomePage.module.css";
import Bookmark from "../../components/Bookmark/Bookmark";

function HomePage() {
  const loginState = useSelector((state) => state.login);
  const registerState = useSelector((state) => state.registration);
  const storyPost = useSelector((state) => state.addStory);
  const bookmarkState = useSelector((state) => state.bookmark);

  // console.log("triggerState.value", triggerState.value);

  if (
    loginState?.value === 1 ||
    registerState?.value === 1 ||
    storyPost?.value === 1
  ) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }

  return (
    <div className={styles.container}>
      <Navbar />
      {bookmarkState.value === 0 && <Post />}
      {bookmarkState.value === 1 && <Bookmark />}
    </div>
  );
}

export default HomePage;
