import React from "react";
import { useSelector } from "react-redux";

import Navbar from "../../components/Navbar/Navbar";
import Post from "../../components/Post/Post";
import styles from "./HomePage.module.css";

function HomePage() {
  const loginState = useSelector((state) => state.login);
  const registerState = useSelector((state) => state.register);
  const storyPost = useSelector((state) => state.addStory);

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
      <Post />
    </div>
  );
}

export default HomePage;
